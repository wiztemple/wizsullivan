
const ExperienceCard = ({ title, company, location, startDate, endDate, logo, logoAlt }) => {
  return (
    <div className="p-5 shadow mb-5 rounded-lg hover:shadow-sm">
      <span className="block text-sm text-gray-500">{`${startDate} - ${endDate}`}</span>
      <span className="block text-lg font-semibold">{title}</span>
      <div className="flex items-center">
        <image
          src={logo}
          className="object-cover rounded-md"
          alt={logoAlt}
        />
        <span className="block text-sm">{`${company}, ${location}`}</span>
      </div>
    </div>
  )
}

export default ExperienceCard;
