const PageTitle = ({resource}) => {
    return( 

<section id="liste"> 
<h1>{resource.category}</h1>
<a href={resource.url}>{resource.title}</a>

</section>
    
)
  };
  
  export default PageTitle;
  