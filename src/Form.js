import React from 'react';

const Form = (props) => (
 <div>
        <form onSubmit={(e)=>props.handleSubmit(e)} style={{ margin: "0 auto", width: "150px", textAlign: "center" }}>
          <div className="form-group">
            <label htmlFor="image">Image number:</label>
            <select id="image" className="form-control" value={props.imgNum} onChange={(e)=>props.handleImgNumChange(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="animal">Animal type:</label>
            <select id="animal" className="form-control" value={props.animal} onChange={(e)=>props.handleAnimalChange(e)}>
              <option value="random">Random</option>
              <option value="shibes">Shibes</option>
              <option value="cats">Cats</option>
              <option value="birds">Birds</option>
            </select>

          </div>

          <input className="btn btn-primary" disabled={props.isLoading} type="submit" value={props.isLoading? "Loading data": "Search"} />

        </form>

 </div>
);

export default Form;