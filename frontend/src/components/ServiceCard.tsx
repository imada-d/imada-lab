interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  imageUrl?: string;
}

const ServiceCard = ({
  title,
  subtitle,
  description,
  link,
  imageUrl,
}: ServiceCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center text-blue-600 font-medium">
          <span>詳しく見る</span>
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
