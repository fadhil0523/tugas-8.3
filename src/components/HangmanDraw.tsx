interface HangmanDrawProps {
  attempt: number;
}

function HangmanDraw({ attempt }: HangmanDrawProps) {
  return (
    <div className="relative">
      <div className="bg-black w-64 h-2 ml-32" />
      <div className="h-20 w-2 bg-black absolute right-0 top-0" />
      <div className="h-[400px] w-2 bg-black ml-32" />
      <div className="bg-black w-64 h-2" />
      {HangmanFullBody.slice(0, attempt)}
    </div>
  );
}

const HangmanHead = () => {
  return (
    <div className="rounded-full border-6 border-black w-15 h-15 absolute -right-6.5 top-19" />
  );
};

const HangmanBody = () => {
  return <div className="h-20 w-2 bg-black absolute right-0 top-33" />;
};

const HangmanRightArm = () => {
  return (
    <div className="h-20 w-2 bg-black absolute -right-8 top-25 rotate-50" />
  );
};

const HangmanLeftArm = () => {
  return (
    <div className="h-20 w-2 bg-black absolute right-8 top-25 -rotate-50" />
  );
};

const HangmanRightLeg = () => {
  return (
    <div className="h-20 w-2 bg-black absolute -right-5 top-50 -rotate-30" />
  );
};

const HangmanLeftLeg = () => {
  return (
    <div className="h-20 w-2 bg-black absolute right-5 top-50 rotate-30" />
  );
};

const HangmanFullBody = [
  <HangmanHead key="head" />,
  <HangmanBody key="body" />,
  <HangmanRightArm key="right-arm" />,
  <HangmanLeftArm key="left-arm" />,
  <HangmanRightLeg key="right-leg" />,
  <HangmanLeftLeg key="left-leg" />,
];

export default HangmanDraw;