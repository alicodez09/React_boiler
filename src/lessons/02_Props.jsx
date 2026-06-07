import Greeting from "./props/Greeting";
import StatusBadge from "./props/StatusBadge";
import LikeButton from "./props/LikeButton";
import Box from "./props/Box";
import UserProfile from "./props/UserProfile";

const PropsLesson = () => {
  const user = { name: "Ali", email: "ali@example.com", role: "Admin" };

  return (
    <div className="lesson">
      <h2>Lesson 2: Props</h2>

      <section>
        <h3>1. Basic Props</h3>
        <Greeting name="Zeeshan" age={22} />
        <Greeting name="Ahmed" age={30} />
      </section>

      <section>
        <h3>2. Default Prop Values</h3>
        <StatusBadge label="Admin" color="crimson" />
        <StatusBadge label="Editor" color="steelblue" />
        <StatusBadge label="Guest" />
      </section>

      <section>
        <h3>3. Function as a Prop</h3>
        <LikeButton onLike={() => alert("Liked!")} />
      </section>

      <section>
        <h3>4. children Prop</h3>
        <Box title="About React">
          <p>React is a JavaScript library for building UIs.</p>
        </Box>
      </section>

      <section>
        <h3>5. Object as a Prop</h3>
        <UserProfile user={user} />
      </section>
    </div>
  );
};

export default PropsLesson;
