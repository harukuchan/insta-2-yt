import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "minhnghia",
    userImg:
      "https://tuoitrechinhphuc.com/wp-content/uploads/2020/12/con-meo-1.jpg",
    img: "https://tuoitrechinhphuc.com/wp-content/uploads/2020/12/con-meo-1.jpg",
    captions: "this is the ameo",
  },
  {
    id: "456",
    username: "minhnghia0910",
    userImg:
      "https://tuoitrechinhphuc.com/wp-content/uploads/2020/12/con-meo-1.jpg",
    img: "https://tuoitrechinhphuc.com/wp-content/uploads/2020/12/con-meo-1.jpg",
    captions:
      "this is the ameo lorem this is the ameo lorem this is the ameo lorem this is the ameo lorem this is the ameo lorem this is the ameo lorem this is the ameo lorem this is the ameo lorem",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.captions}
        />
      ))}
    </div>
  );
}

export default Posts;
