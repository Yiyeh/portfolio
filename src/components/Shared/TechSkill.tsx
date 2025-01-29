interface Props {
  tech: string;
}

export const TechBadge = ({ tech: text }: Props) => {
  const badgeData: {
    [key: string]: {
      bgColor: string;
      textColor: string;
      logo: string;
      url: string; 
    };
  } = {
    Javascript: {
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    Flutter: {
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      url: "https://flutter.dev/",
    },
    "Unreal Engine": {
      bgColor: "bg-gray-200",
      textColor: "text-gray-800",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
      url: "https://www.unrealengine.com/",
    },
    Unity: {
      bgColor: "bg-gray-300",
      textColor: "text-black",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      url: "https://unity.com/",
    },
    Dart: {
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      url: "https://dart.dev/",
    },
    "C#": {
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    HTML: {
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    CSS: {
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    "Godot Engine": {
      bgColor: "bg-gray-200",
      textColor: "text-gray-800",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
      url: "https://godotengine.org/",
    },
    Laravel: {
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      url: "https://laravel.com/",
    },
    PHP: {
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      url: "https://www.php.net/",
    },
    MYSQL: {
      bgColor: "bg-blue-200",
      textColor: "text-blue-800",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      url: "https://www.mysql.com/",
    },
    GIT: {
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      url: "https://git-scm.com/",
    },
    "Tailwind CSS": {
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
      url: "https://tailwindcss.com/",
    },
    "TypeScript": {
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      url: "https://www.typescriptlang.org/",
    },
    React: {
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://react.dev/",
    },
  };

  const badge = badgeData[text];

  if (!badge) {
    return null; // Si no coincide con ninguna tecnología, no renderiza nada.
  }

  const handleClick = () => {
    window.open(badge.url, "_blank", "noopener,noreferrer");
  };

  return (
    <span
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-1 font-medium text-xs px-3 py-2 rounded-full shadow transition-transform hover:-rotate-z-2 transform hover:scale-105 hover:shadow-xl hover:cursor-pointer ${badge.bgColor} ${badge.textColor}`}
    >
      <img src={badge.logo} alt={`${text} logo`} className="w-4 h-4" />
      {text}
    </span>
  );
};
