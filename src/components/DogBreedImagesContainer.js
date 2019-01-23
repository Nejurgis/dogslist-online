import React, {Component} from 'react'
import DogBreedImages from './DogBreedImages'
import request from 'superagent'

export default class DogsBreedImagesContainer extends Component {
    state = { 
        images: null,
        names: null
     }

    componentDidMount(){
        const breed = this.props.match.params.breed
        request
            .get(`https://dog.ceo/api/breed/${breed}/images`)
            .then(response => {
                this.updateImages(response.body.message)
                console.log(response)
            })

            .catch(console.error)

    }

    updateImages(images){
        this.setState({
            images: images
        })
    }

    updateNames(names){
        this.setState({
            names: names
        })
    }

    render() {
        // console.log(this.state.images)
        return <DogBreedImages images ={ this.state.images } name={this.props.match.params.breed} />
    }
}