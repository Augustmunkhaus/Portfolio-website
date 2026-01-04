import {Music, Dumbbell, Gamepad} from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    
    {
      icon: <Music size={40} />,
      title: 'Music',
      description: 'I enjoy playing guitar, both on my acoustic and electric.',
      color: 'purple'
    },
   
    {
      icon: <Dumbbell size={40} />,
      title: 'Fitness',
      description: 'I workout regularly, focusing on strength based training. Competed in Powerlifting competitions.',
      color: 'red'
    },
    {
      icon: <Gamepad size={40} />,
      title: 'Gaming',
      description: 'I enjoy video gaming on PC, playing everything from League of Legends to Battlefield.',
      color: 'yellow'
    },
    
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      red: 'bg-red-100 text-red-600 hover:bg-red-200',
      yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
      pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Hobbies & Interests
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond coding, here's what keeps me occupied
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-20 h-20 rounded-full ${getColorClasses(hobby.color)} flex items-center justify-center mb-4 transition-colors duration-300`}>
                {hobby.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {hobby.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Always Learning
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            I believe in continuous growth, both professionally and personally.
            These hobbies help me maintain a healthy work-life balance and bring
            fresh perspectives to my technical work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
