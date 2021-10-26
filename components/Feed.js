import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();
  return (
    <div>
      <main
        className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
      xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
      // if dont have session , col1 maxw 768 (! overwrite)
      >
        {/*Section */}
        <section className="col-span-2">
          {/* story */}
          <Stories />
          {/* post */}
          <Posts />
        </section>
        {session && (
          <>
            {/* section */}
            <section className="hidden md:col-span-1 xl:inline-grid">
              <div className="fixed">
                {/* mini profile */}
                <MiniProfile />
                {/* suggest */}
                <Suggestions />
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Feed;
