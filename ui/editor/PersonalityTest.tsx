import * as RadioGroup from '@radix-ui/react-radio-group';
import './styles.css';
const PersonalityTest = ({personalityObj, setPersonalityObj}) => {
 
    const onChange = (value: string) => {
      console.log('onChange', value)
      if (value === "introvert") {
        personalityObj.introvert++;
      }
      if (value === "extrovert") {
        personalityObj.extrovert++;
      }
      if (value === "intuition") {
        personalityObj.intuition++;
      }
      if (value === "sensing") {
        personalityObj.sensing++;
      }
      if (value === "feeling") {
        personalityObj.feeling++;
      }
      if (value === "thinking") {
        personalityObj.thinking++;
      }
      if (value === "judging") {
        personalityObj.judging++;
      }
      if (value === "perceiving") {
        personalityObj.perceiving++;
      }
      setPersonalityObj(personalityObj);
    };
    const onClick = (e) => {
      e.preventDefault();
      console.log('e', e);
  
    }
  
   
    return (
      <>
    <label>
      How do you prefer a Friday night ? 
    </label>
    <form>
      <RadioGroup.Root className="RadioGroupRoot" defaultValue="extrovert" aria-label="View density" onClick={onClick} onValueChange={onChange}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="extrovert" id="e1" >
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
            You cannot wait to go out with your friends
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="introvert" id="i1">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
           You do not mind staying at home and spending time with myself
          </label>
        </div>
      </RadioGroup.Root>
    </form>
     <label>
     You enter a party, what do you do ? 
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="extrovert" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="extrovert" id="e2" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You try to become the center of attraction. You try to attract eye balls
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="introvert" id="i2">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You wait for others to talk to you and till then enjoy your solitude
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   <label>
     Your friend who made plans with you reveals that they have to attend another party and ask you to join them ? What do you do?
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="extrovert" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="extrovert" id="e3" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You join them since you don't have any other plans
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="introvert" id="i3">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You think it's too late for change of plans and since you do not know the people at the other party - politely decline the offer
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   <label>
      Your friend tells them about their breakup story, what's your initial reaction ? 
    </label>
    <form>
      <RadioGroup.Root className="RadioGroupRoot" defaultValue="intuition" aria-label="View density" onClick={onClick} onValueChange={onChange}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="intuition" id="n1" >
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
            You tell them you always had a feeling about their partner and you expected this outcome
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="sensing" id="s1">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
           You are completely off-guard by your friends confession as you generally try to not involve in other people's affairs
          </label>
        </div>
      </RadioGroup.Root>
    </form>
     <label>
     A friend tells you about a new stock in the financial market and some market trends
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="intuition" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="intuition" id="n2" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You research on your own after the party and predict some future outcomes
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="sensing" id="s2">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You wait for more data to come out and don't come to any conclusions immediately
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   <label>
    You are watching an intense sports match and there's a betting in the room
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="intuition" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="intuition" id="n3" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You have a feeling that one team is going to win the match
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="sensing" id="s3">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You think it's too premature to think about one team winning the match
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   <label>
     You get a chance to relocate to a job in a new city
    </label>
    <form>
      <RadioGroup.Root className="RadioGroupRoot" defaultValue="feeling" aria-label="View density" onClick={onClick} onValueChange={onChange}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="feeling" id="f1" >
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
            You feel bad about leaving your current role and your colleagues in the current location
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="thinking" id="t1">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
           You jump with joy and take up the offer as it is a professional growth for you
          </label>
        </div>
      </RadioGroup.Root>
    </form>
     <label>
     You went through a breakup recently
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="feeling" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="feeling" id="f2" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You take off some time and it takes a lot of time to process the breakup
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="thinking" id="t2">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You have been anticipating this breakup and move on quickly
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   <label>
    You are asked to drop a person at a party but it's in the opposite direction of your house
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="feeling" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="feeling" id="f3" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You want to help them since they are new to city and do not have access to car
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="thinking" id="t3">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You politely tell them that it is opposite to your house and ask them to figure out other options
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   <label>
     You get a new asignment today which takes 2 days of effort which is due in 30 days
    </label>
    <form>
      <RadioGroup.Root className="RadioGroupRoot" defaultValue="judging" aria-label="View density" onClick={onClick} onValueChange={onChange}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="judging" id="j1" >
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
            You jump on it immediately and finish it ASAP
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="RadioGroupItem" value="perceiving" id="p1">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
           You know the job takes 2 days so wait till the last 2 days to finish the assignment
          </label>
        </div>
      </RadioGroup.Root>
    </form>
     <label>
     Your friend asks you to swap a movie night from Saturday to Sunday
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="judging" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="perceiving" id="p2" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You are flexible and accomodate the schedule
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="judging" id="j2">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You cancel the plan since you want to stick to your original plan as this will suggest that you might be more accomodative in the future
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   <label>
    You are going on a trip with your friends
   </label>
   <form>
     <RadioGroup.Root className="RadioGroupRoot" defaultValue="judging" aria-label="View density" onClick={onClick} onValueChange={onChange}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="judging" id="j3" >
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r1">
          You take leadership and make concrete plans for the entire friends group
         </label>
       </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <RadioGroup.Item className="RadioGroupItem" value="perceiving" id="p3">
           <RadioGroup.Indicator className="RadioGroupIndicator" />
         </RadioGroup.Item>
         <label className="Label" htmlFor="r2">
          You trust your friends will make plans and you are okay with that since you are flexible
         </label>
       </div>
     </RadioGroup.Root>
   </form>
   </>
    )
  };
  export default PersonalityTest;
  