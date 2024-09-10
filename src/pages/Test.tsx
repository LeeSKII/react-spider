import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import InfiniteScroller from "@/components/custom/InfiniteScroller";

export default function Test() {
  return (
    <>
      <img src={viteLogo} alt="vite logo" />
      <img src={reactLogo} alt="react logo" />
      <div className="w-full h-40">
        <InfiniteScroller speed={30} direction="up" className="h-full">
          <div className="py-2 text-red-500 h-40 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolore eligendi fugit, dicta quasi eum illum commodi tempore, itaque
            autem est facilis distinctio natus. Voluptates culpa accusamus
            fugiat ut quae!
          </div>
          <div className="py-2 text-blue-500">这是第二条消息</div>
          <div className="py-2 text-green-500">这是第三条消息</div>
          <div className="py-2 text-purple-500">这是第四条消息</div>
          <div className="py-2 text-yellow-500">这是第五条消息</div>
        </InfiniteScroller>
      </div>
    </>
  );
}
