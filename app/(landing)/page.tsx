import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page 모두가 접근 가능
      <div>
        <Link href="/sign-in">
          <Button>로그인</Button>
        </Link>
        <Link href="/sign-up">
          <Button>회원가입</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
