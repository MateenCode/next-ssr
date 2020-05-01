import Link from "next/link";

const About = () => {
  return (
    <div style={{ fontSize: "20px", color: "gray" }}>
      <h1>About</h1>
      <Link href='/'>
        <button>Back</button>
      </Link>
      <p>I was a magician</p>
    </div>
  );
};

export default About;
