import { useState } from "react";

export default function Card() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(2086);
  const [avatarError, setAvatarError] = useState(false);
  const [postError, setPostError] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-emerald-100">
      {/* Encabezado */}
      <header className="flex items-center gap-3 p-4">
        {avatarError ? (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl ring-2 ring-emerald-300">
            🌿
          </div>
        ) : (
          <img
            src="https://i.pinimg.com/736x/c3/8e/d8/c38ed8e2da819bba75e3554ee858ce76.jpg"
            alt="Perfil de Baizhu"
            onError={() => setAvatarError(true)}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-300"
          />
        )}

        <div className="flex-1">
          <h2 className="flex items-center gap-1 font-semibold text-slate-800">
            Baizhu
            <span className="text-emerald-500" title="Verificado">✔</span>
          </h2>
          <p className="text-xs text-slate-500">
            @Farmacia_Bubu · hace 3 h
          </p>
        </div>
        <button className="text-xl text-slate-400 hover:text-slate-600">⋯</button>
      </header>

      {/* Texto */}
      <p className="px-4 pb-3 text-sm leading-relaxed text-slate-700">
        Un buen descanso, una buena alimentación y una visita a la Farmacia Bubu:
        la receta perfecta para la salud. 🌿🍵 Changsheng también les manda
        saludos. 🐍{" "}
        <span className="text-emerald-600">
          #FarmaciaBubu #Liyue #Dendro #Salud
        </span>
      </p>

      {/* Imagen de la publicación */}
      {postError ? (
        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-emerald-200 via-green-400 to-teal-600">
          <span className="text-7xl drop-shadow-lg">🐍</span>
        </div>
      ) : (
        <img
          src="https://i.pinimg.com/736x/fa/b6/6a/fab66a191615dbc7d4ae99be4dba2a22.jpg"
          alt="Publicación de Baizhu"
          onError={() => setPostError(true)}
          className="h-56 w-full object-cover"
        />
      )}

      {/* Contadores */}
      <div className="flex justify-between px-4 py-2 text-xs text-slate-500">
        <span>{likes.toLocaleString()} me gusta</span>
        <span>254 comentarios · 61 compartidos</span>
      </div>

      {/* Acciones */}
      <footer className="flex border-t border-slate-100 text-sm font-medium text-slate-600">
        <button
          onClick={toggleLike}
          className={`flex-1 py-3 transition hover:bg-emerald-50 ${
            liked ? "text-rose-500" : ""
          }`}
        >
          {liked ? "❤️" : "🤍"} Me gusta
        </button>
        <button className="flex-1 py-3 transition hover:bg-emerald-50">
          💬 Comentar
        </button>
        <button className="flex-1 py-3 transition hover:bg-emerald-50">
          🔁 Compartir
        </button>
      </footer>
    </article>
  );
}