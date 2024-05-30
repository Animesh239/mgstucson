// pages/blog/[id].js
import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AttachmentPreview from "@/components/AttachmentPreview";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const foundPost = blogdata.find((post) => post.id === parseInt(id));
      setPost(foundPost);
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const shortDesc = post.desc.length > 0 ? post.desc[0].text : "";
  const detailedDesc = post.desc.slice(1);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={shortDesc} />
              {detailedDesc.length > 0 && (
                <div className="detailed-desc">
                  {detailedDesc.map((text , i) => (
                    <p className="desc-p" key={i}>
                      {text.text}
                    </p>
                  ))}
                </div>
              )}
              {post.attachments && post.attachments.length > 0 && (
                <div className="attachments">
                  {post.attachments.map((attachment, index) => (
                    <AttachmentPreview key={index} attachment={attachment} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  );
};

export default SinglePost;
