import { PlayCircle } from "lucide-react";
import { useState } from "react";
import video from "/nyda-video.mp4";
import thumbnail from "/nyda.jpg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            شاهد رحلتنا في خدمة المجتمع
          </h2>
          <p className="text-muted-foreground">
            تعرف على نشاطات رابطة شباب أطباء النوبارية
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          {!isPlaying ? (
            <div className="relative">
              <img
                src={thumbnail}
                alt="فيديو الرابطة"
                className="w-full h-auto"
              />
              <button
                title="playing video"
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <PlayCircle className="w-16 h-16 text-white" />
              </button>
            </div>
          ) : (
            <video
              className="w-full aspect-video"
              controls
              autoPlay
              src={video}
            >
              عذراً، متصفحك لا يدعم تشغيل الفيديو.
            </video>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
