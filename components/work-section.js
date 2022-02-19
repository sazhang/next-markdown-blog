import WorkPreview from "./work-preview";

export default function WorkSection({ posts }) {
  return (
    <section id="work" className="pb-20 sm:pb-40">
      <h2 className="md:text-lg lg:text-xl uppercase py-8 sm:py-10 lg:py-12">
        Work
      </h2>
      <div className="border-t">
        {posts.map((post) => (
          <WorkPreview
            key={post.name}
            name={post.name}
            description={post.description}
            date={post.date}
            status={post.status}
            link={post.link}
            roles={post.roles}
          ></WorkPreview>
        ))}
      </div>
    </section>
  );
}
