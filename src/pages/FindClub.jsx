const FindClub = () => {
  return (
    <div className="find">
      <div className="find-container">
        <main className="find">
          <h1>Fudbalski klubovi i Škole fudbala</h1>
          <p>
            Najveća ponuda klubova i škola fudbala za sve uzraste. Upišite se
            još danas i ostvarite popust na prvu članarinu!
          </p>
          <form className="search-section">
            <input type="text" placeholder="Opština" />
            <input type="text" placeholder="Godište" />
            <input type="text" placeholder="Članarina" />
            <button type="submit">Search</button>
          </form>
        </main>
        <div className="popular">
          <h2>Najpopularniji</h2>
          <div className="popular-container">
            <div className="club1"></div>
            <div className="club1"></div>
            <div className="club1"></div>
            <div className="club1"></div>
            <div className="club1"></div>
            <div className="club1"></div>
            <div className="club1"></div>
            <div className="club1"></div>
          </div>
          <button className="all">Pogledajte celu ponudu</button>
        </div>
      </div>
    </div>
  );
};

export default FindClub;
