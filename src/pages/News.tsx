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

        // Реальный вызов API, если появится доступ
        // const response = await fetch(`API_URL?account=${instagramUrls[mode]}`);
        // const data = await response.json();
        // setPosts(data.posts);

        // Заглушка для демонстрации
        setPosts([
          {
            id: "1",
            image: "https://via.placeholder.com/400x300",
            title: "Пример новости 1",
            description: "Описание новости 1",
            link: instagramUrls[mode],
          },
          {
            id: "2",
            image: "https://via.placeholder.com/400x300",
            title: "Пример новости 2",
            description: "Описание новости 2",
            link: instagramUrls[mode],
          },
          {
            id: "3",
            image: "https://via.placeholder.com/400x300",
            title: "Пример новости 3",
            description: "Описание новости 3",
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
    <main className="w-full max-w-[1400px] mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-neutral-800">{t.newsSection.title}</h1>
        <p className="text-lg text-neutral-600 mt-4">{t.newsSection.subtitle}</p>
      </header>

      {loading ? (
        <p className="text-center text-lg text-neutral-800">Загрузка...</p>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-neutral-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-base text-neutral-600 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {t.newsSection.learnMore}
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-neutral-800">
          {mode === "adult" ? t.instagram.adults : t.instagram.kids}
        </p>
      )}
    </main>
  );
};

export default InstagramNews;
