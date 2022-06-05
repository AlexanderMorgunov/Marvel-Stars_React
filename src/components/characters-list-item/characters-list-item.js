import './characters-list-item.css'

const CharactersListItem = ({title,description,comics,imageName}) =>{
    const src = "\/images\/"+imageName+".jpg";
    // const src = "/images/Spiderman.jpg";
    // const src = "../../images/Spiderman.jpg";
    
    return (
        // <h1> {src}</h1>

        // <img src={src} alt='123'/>
        
        <div className="card mb-3 col-sm-12 col-md-6 col-lg-4">
            <div className="row g-0">
                <div className="col-6">
                    <img src={src} alt={imageName}/>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        {/* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-secondary btn-sm">More</button> */}
                        <button type="button" className="btn btn-secondary btn-sm">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharactersListItem;