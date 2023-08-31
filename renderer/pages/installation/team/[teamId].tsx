import { useRouter } from "next/router";
import TeamInstallScreen from "../../../screen/TeamInstallScreen";

export default function TeamInstallPage() {
  const router = useRouter();
  const { teamId } = router.query as { teamId: string };

  return <TeamInstallScreen />;
}
