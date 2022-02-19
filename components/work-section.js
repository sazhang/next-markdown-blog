import WorkPreview from "./work-preview";

export default function WorkSection({ posts }) {
  return (
    <section id="work" className="pb-20 sm:pb-40">
      <h2 className="md:text-lg lg:text-xl uppercase my-8 sm:my-10 lg:my-12">
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
            linkDescription={post.linkDescription}
            roles={post.roles}
          ></WorkPreview>
        ))}
      </div>
    </section>
  );
}
