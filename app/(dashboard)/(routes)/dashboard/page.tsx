import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboar Page(Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
