import WorkPreview from "./work-preview";

export default function WorkSection({ posts }) {
  return (
    <section id="work" className="pb-20 sm:pb-40">
      <h2 className="md:text-lg lg:text-xl uppercase py-4 lg:py-5">Work</h2>
      <hr></hr>
      <div>
        {posts.map((post) => (
          <>
            <WorkPreview
              key={post.name}
              name={post.name}
              description={post.description}
              date={post.date}
              link={post.link}
              linkDescription={post.linkDescription}
            ></WorkPreview>
            <hr></hr>
          </>
        ))}
      </div>
    </section>
  );
}
