import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGithub, FaGlobe } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  website: string;
  github: string;
  discordId: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Weiss Owl',
    role: 'Founder & Owner',
    image: 'https://avatars.githubusercontent.com/u/56450870?v=4',
    discordId: '485472723884310539',
    bio: 'Tech Enthusiast, Application & Automation Developer',
    website: 'https://alfari.id',
    github: 'https://github.com/alfari24'
  },
  {
    name: 'iaMJ / アーリャ',
    role: 'Staff & Developers',
    image: 'https://avatars.githubusercontent.com/u/108927987?v=4',
    discordId: '885731228874051624',
    bio: 'Just a Discord Bot Developer and Frontend Developer who doesn\'t know what she wants to do with her life.',
    website: 'https://mjba.my',
    github: 'https://github.com/idMJA'
  }
];

async function getDiscordAvatar(userId: string): Promise<string | null> {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, { next: { revalidate: 60 } });
    const data = await response.json();
    if (data.success && data.data.discord_user.avatar) {
      const { id, avatar } = data.data.discord_user;
      return `https://cdn.discordapp.com/avatars/${id}/${avatar}`;
    }
  } catch (error) {
    console.error('Error fetching Discord avatar:', error);
  }
  return null;
}

export default async function TeamPage() {
  // Fetch avatars for all team members
  await Promise.all(
    teamMembers.map(async (member) => {
      const discordAvatar = await getDiscordAvatar(member.discordId);
      if (discordAvatar) {
        member.image = discordAvatar;
      }
    })
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-8 py-24 text-center">
          <h1 className="text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're a passionate team dedicated to revolutionizing hosting solutions and providing the best experience for developers.
          </p>
        </section>

        {/* Team Grid */}
        <section className="container mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
                <div className="flex items-center gap-6 mb-6">
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-zinc-800">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-200">{member.name}</h3>
                    <p className="text-gray-400 text-lg">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 text-lg">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 text-gray-200 hover:bg-zinc-700 px-6 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-2"
                  >
                    <FaGlobe className="w-5 h-5" />
                    Website
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-950 text-gray-300 hover:bg-zinc-900 px-6 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-2"
                  >
                    <FaGithub className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 