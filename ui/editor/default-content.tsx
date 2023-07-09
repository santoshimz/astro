const DEFAULT_EDITOR_CONTENT = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "My personality test" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Answer few questions and know more about your personality",
        }
      ],
    }

    ]
    };

export default DEFAULT_EDITOR_CONTENT;
