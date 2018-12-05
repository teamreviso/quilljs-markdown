import Header from './header'
import Blockquote from './blockquote'
import Bold from './bold'

class TagsOperators {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.getOperatorsAll.bind(this)
    this.tags = [
      new Header(this.quillJS).getAction(),
      new Blockquote(this.quillJS).getAction(),
      new Bold(this.quillJS).getAction()
    ]
  }

  getOperatorsAll () {
    return this.tags
  }
}

export default TagsOperators
