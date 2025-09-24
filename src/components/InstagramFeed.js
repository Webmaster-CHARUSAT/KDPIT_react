import React from "react";

const InstagramFeed = () => {
  return (
    <div className="h-[300px] overflow-y-auto">
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DOm1Ap1k7fw/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
              <a href="https://www.instagram.com/p/DOm1Ap1k7fw/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                View this post on Instagram
              </a>
            </blockquote>
            <script async src="//www.instagram.com/embed.js"></script>
          `,
        }}
      ></div>
    </div>
  );
};

export default InstagramFeed;
