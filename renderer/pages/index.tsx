import Link from "next/link";
import useGetTestInfo from "../api/test/useGetTestInfo";

export default function Home() {
  // const { data } = useGetTestInfo();

  // console.log(data);
  
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}