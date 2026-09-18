import { Suspense } from "react";
import FqacSite from "../components/fqac-site";
import LecturerStats, {
  LecturerStatsSkeleton,
} from "../components/LecturerStats";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <FqacSite
      lecturerStats={
        <Suspense fallback={<LecturerStatsSkeleton />}>
          <LecturerStats />
        </Suspense>
      }
    />
  );
}
