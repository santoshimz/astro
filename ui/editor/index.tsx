"use client";
import { useDebouncedCallback } from "use-debounce";

import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { TiptapEditorProps } from "./props";
import { TiptapExtensions } from "./extensions";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { useCompletion } from "ai/react";
import { toast } from "sonner";
import va from "@vercel/analytics";
import { EditorBubbleMenu } from "./components";
import { getPrevText } from "@/lib/editor";
import PersonalityTest  from "./PersonalityTest";
import DEFAULT_EDITOR_CONTENT from "./default-content";


export default function Editor() {
  const [content, setContent] = useLocalStorage(
    "content",
    DEFAULT_EDITOR_CONTENT,
  );
  const [personalityType, setPeronalityType] = useLocalStorage(
    "personalityType",
    'INFP',
  );
  console.log('personalityType', personalityType);

  

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON();
    setContent(json);

  }, 750);

  const editor = useEditor({
    extensions: TiptapExtensions,
    editorProps: TiptapEditorProps,
    onUpdate: (e) => {
      const selection = e.editor.state.selection;
      const lastTwo = getPrevText(e.editor, {
        chars: 2,
      });
      if (lastTwo === "++" && !isLoading) {
        e.editor.commands.deleteRange({
          from: selection.from - 2,
          to: selection.from,
        });
        complete(
          getPrevText(e.editor, {
            chars: 5000,
          }),
        );
        // complete(e.editor.storage.markdown.getMarkdown());
        va.track("Autocomplete Shortcut Used");
      } else {
         debouncedUpdates(e);
      }
    },
    autofocus: "end",
  });

  const { complete, completion, isLoading, stop } = useCompletion({
    id: "novel",
    api: `/api/generate?personalityType=${personalityType}`,
    headers: {
      "personality-type": personalityType,
    },
    onFinish: (_prompt, completion) => {
      editor?.commands.setTextSelection({
        from: editor.state.selection.from - completion.length,
        to: editor.state.selection.from,
      });
    },
    onError: (err) => {
      toast.error(err.message);
      if (err.message === "You have reached your request limit for the day.") {
        va.track("Rate Limit Reached");
      }
    },
  });

  const prev = useRef("");

  // Insert chunks of the generated text
  useEffect(() => {
    const diff = completion.slice(prev.current.length);
    prev.current = completion;
    editor?.commands.insertContent(diff);
  }, [isLoading, editor, completion]);

  useEffect(() => {
    // if user presses escape or cmd + z and it's loading,
    // stop the request, delete the completion, and insert back the "++"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || (e.metaKey && e.key === "z")) {
        stop();
        if (e.key === "Escape") {
          editor?.commands.deleteRange({
            from: editor.state.selection.from - completion.length,
            to: editor.state.selection.from,
          });
        }
        editor?.commands.insertContent("++");
      }
    };
    const mousedownHandler = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      stop();
      if (window.confirm("AI writing paused. Continue?")) {
        complete(editor?.getText() || "");
      }
    };
    if (isLoading) {
      document.addEventListener("keydown", onKeyDown);
      window.addEventListener("mousedown", mousedownHandler);
    } else {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", mousedownHandler);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", mousedownHandler);
    };
  }, [stop, isLoading, editor, complete, completion.length]);

  const [personalityObj, setPersonalityObj] = useState({
    "introvert": 0,
    "extrovert": 0,
    "intuition": 0,
    "sensing": 0,
    "feeling": 0,
    "thinking": 0,
    "judging": 0,
    "perceiving": 0,
  });

  useEffect(() => {
    console.log('personalityObj', personalityObj);
    const introvertExtrovert = personalityObj.introvert > personalityObj.extrovert ? "I" : "E";
    const intuitionSensing = personalityObj.intuition > personalityObj.sensing ? "N" : "S";
    const feelingThinking = personalityObj.feeling > personalityObj.thinking ? "F" : "T";
    const judgingPerceiving = personalityObj.judging > personalityObj.perceiving ? "J" : "P";
    const personalityType =  `${introvertExtrovert}${intuitionSensing}${feelingThinking}${judgingPerceiving}`;
    if (editor && content ) {
      setPeronalityType(personalityType);
      editor.commands.setContent(content);
    }
  }, [editor, personalityObj, setPeronalityType, content])

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg"
    >
      {editor && <EditorBubbleMenu editor={editor} />}
      <PersonalityTest personalityObj={personalityObj} setPersonalityObj={setPersonalityObj} />
      <EditorContent editor={editor}  />
    </div>
  );
}
