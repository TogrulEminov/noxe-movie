import "./FilmPortfolioHero.scss"
const FilmPortfolioHero = ({ background }) => {
  return (
    <section id="film_portfolio_banner" style={{ background: `url(${background})` }}>
      <h3>Film Portfolio</h3>
    </section>
  );
};

export default FilmPortfolioHero;
