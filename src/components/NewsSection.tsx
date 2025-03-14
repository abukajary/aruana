import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import news from "../locales/news"; 
interface Post {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const InstagramNews: React.FC = () => {
  const { language, mode } = useAppContext();
  const t = news[language];

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // URLs для Instagram-аккаунтов
  const instagramUrls = {
    adult: "https://www.instagram.com/aruana_clinic/",
    child: "https://www.instagram.com/aruana_kids/",
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // Здесь вы добавите реальный вызов API
        // const response = await fetch(`API_URL?account=${instagramUrls[mode]}`);
        // const data = await response.json();
        // setPosts(data.posts);

        // Заглушка для демонстрации
        setPosts([
          {
            id: "1",
            image: "https://via.placeholder.com/300x200",
            title: "Пример поста 1",
            description: "Описание поста 1",
            link: instagramUrls[mode],
          },
          {
            id: "2",
            image: "https://via.placeholder.com/300x200",
            title: "Пример поста 2",
            description: "Описание поста 2",
            link: instagramUrls[mode],
          },
        ]);
      } catch (error) {
        console.error("Ошибка при загрузке постов:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [mode]);

  return (
    <section className="w-full max-w-[1290px] h-auto mx-auto p-6 bg-gray-50 rounded-md shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-semibold text-neutral-800 mb-12">
          {t.newsSection.title}
        </h2>
        {loading ? (
          <p className="text-center text-lg text-neutral-800">Загрузка...</p>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-[#fdfcfa] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="bg-[#d8d9da] h-48 flex items-center justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-neutral-800 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#606060] mb-6">{post.description}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-800 hover:underline"
                  >
                    {t.newsSection.learnMore}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-neutral-800">
            {mode === "adult" ? t.instagram.adults : t.instagram.kids}
          </p>
        )}
      </div>
    </section>
  );
};

export default InstagramNews;
