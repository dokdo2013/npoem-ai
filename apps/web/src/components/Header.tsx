import {
  cafe24Oneprettynight,
  cafe24Ssurround,
  renaissance,
} from "@/lib/fonts";
import classNames from "classnames";

const Header = () => {
  return (
    <header
      className={classNames(
        cafe24Ssurround.className,
        "container mx-auto py-10"
      )}
    >
      <h1 className="text-4xl text-center font-bold mb-5">N행시 AI</h1>

      <p
        className={classNames(
          "text-center mt-4 text-lg text-gray-700",
          cafe24Oneprettynight.className
        )}
      >
        원하는 문구를 입력하면 AI가 N행시를 만들어드립니다!
      </p>
    </header>
  );
};

export default Header;
