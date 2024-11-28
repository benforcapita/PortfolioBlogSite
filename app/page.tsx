import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StatsCard from './components/features/StatsCard';
import AboutMe from './components/features/AboutMe';
import BlogPosts from './components/features/BlogPosts';

export default function Home() {
  return (
    <div >
      <Header />
      <main >
        <AboutMe />
        <BlogPosts />
        <div>
          <StatsCard title="Projects Completed" value={150} />
          <StatsCard title="Clients Served" value={75} />
          <StatsCard title="Awards Won" value={10} />
          <StatsCard title="Years Experience" value={7} />
        </div>
      </main>
      <Footer />
    </div>
  );
}