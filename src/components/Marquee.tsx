import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <>
      <div className=""></div>
      <Marquee
        speed={300}
        className="marquee inline-block whitespace-nowrap  w-full"
      >
        <h1 className="font-mori italic inline w-full text-[10vw] tracking-wider">
          Who the Hell is he? |
        </h1>
        <h1 className="font-mori italic inline w-full text-[10vw] tracking-wider">
          Who the Hell is he? |
        </h1>
        <h1 className="font-mori italic inline w-full text-[10vw] tracking-wider">
          Who the Hell is he? |
        </h1>
        <h1 className="font-mori italic inline w-full text-[10vw] tracking-wider">
          Who the Hell is he? |
        </h1>
        <h1 className="font-mori italic inline w-full text-[10vw] tracking-wider">
          Who the Hell is he? |
        </h1>
        <h1 className="font-mori italic inline w-full text-[10vw] tracking-wider">
          Who the Hell is he? |
        </h1>
      </Marquee>
      <div className="border-[1px] border-l-0 border-r-0 border-[var(--border-separate)]"></div>
    </>
  );
};

export default MarqueeComponent;
