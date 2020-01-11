import React from "react";

const Titles = () => {
return(
<div>
<h1 className="title-container__title"> Weather  <br/>  Of{'...'}<span>Now</span> </h1>
    <hr />
		<p className="title-container__subtitle">A simple react app developed when learning  <br/> 
    Find me with the source code    <a href="https://github.com/tjtalhaa" className="git-ic mr-3" role="button"><i className="fab fa-x fa-github"  style={{color:'#8b104e'}}></i></a> </p>
    </div>
);
}

export default Titles;