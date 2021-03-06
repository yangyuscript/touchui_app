// previewer.js
export default {
  data () {
    return {
      value: [
        {
          imgSmall: 'http://images.uileader.com/20180110/df5bcefb-43dd-4ad2-9be7-e8f196930795.jpg!m',
          imgBig: 'http://images.uileader.com/20180110/1613ae47-a118-47df-8f44-4341539cbfea.jpg',
          text: '狭长的空间里客餐厅位于同一动线上，印花壁纸以不同花型装饰墙面；素淡的几何印花使沙发墙呈现出恬淡宁和，电视墙则显得富丽典雅；乳白色沙发黑色勾线，与餐椅呼应，点缀的靠包色彩清新温婉。',
          text2: '丰富的线条或直或曲，制造空间上的强烈视觉冲击效果，在玩转几何的过程中，充分淋漓的表现了空间的张力和活力；在设计上，瓷砖的铺贴方式丰富，空间的层次感清晰鲜明；在风格上，以现代为主，同时不乏一些欧式的装饰元素修饰，使空间看上去既休闲雅致又奢丽华贵。'
        }, {
          imgSmall: 'http://images.uileader.com/20180110/e8b190d2-2d04-4ce5-a3cc-c15dab7dc314.jpg',
          imgBig: 'http://images.uileader.com/20180110/5dcff03b-77f6-443e-a5a6-929d79c52f24.jpg',
          text: '充满线性和动感的几何线条装饰在床头软包、靠包、床旗和地毯上，散发着对比冲撞的活力，制造张力感的视觉空间；简约的书桌椅靠墙而设，色调呼应床品和边柜，增强了空间的日常使用功能。',
          text2: '狭长的空间里客餐厅位于同一动线上，印花壁纸以不同花型装饰墙面；素淡的几何印花使沙发墙呈现出恬淡宁和，电视墙则显得富丽典雅；乳白色沙发黑色勾线，与餐椅呼应，点缀的靠包色彩清新温婉。'
        }, {
          imgSmall: 'http://images.uileader.com/20180110/0bf55b8b-53b9-4a2a-bcd6-f93721c477ba.jpg',
          imgBig: 'http://images.uileader.com/20180110/1be3bb7e-1684-475c-89c1-ad4e9ea51eb9.jpg',
          text: '次卧同样运用了线条来营造空间节奏，方正的矩形和波浪感的菱形，加上拼色的条纹及绮丽优美的墙纸印花，空间彰显出优雅的华贵，流露出精致的生活品味。',
          text2: '充满线性和动感的几何线条装饰在床头软包、靠包、床旗和地毯上，散发着对比冲撞的活力，制造张力感的视觉空间；简约的书桌椅靠墙而设，色调呼应床品和边柜，增强了空间的日常使用功能。'
        }
      ],
      textShow: false,
      idx: 0,
      text: ''
    }
  },
  methods: {
    handleShow () {
      ui.showToast({
        title: '显示图片预览'
      })
    },
    handleHide () {
      ui.showToast({
        title: '隐藏图片预览'
      })
    },
    handleopen (e) {
      console.log('open')
      this.textShow = true
      this.text = this.value[e.index].text
    },
    handleclose () {
      this.textShow = false
    },
    handlechange (e) {
      this.idx = e
      this.text = this.value[e].text
    }
  }
}
