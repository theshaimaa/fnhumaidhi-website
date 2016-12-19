import React, {Component} from 'react';
import ShoppingList from './shopping-list.js';
import Divider from '../utilities/divider.js';
import ImageOne from '../../assets/images/shopping/One.png';
import ImageTwo from '../../assets/images/shopping/Two.png';
import ImageThree from '../../assets/images/shopping/Three.png';

const content = [
    {
        "title": 'باستيلات بستايل حديث',
        "text": 'تصميم اي غرفة بالبيت ما يعتمد كيف نبدا..يعتمد على اي قطعة اخترتها من البداية و عجبتنني و شلون اقدر اصمم كل الغرفة على اساسها. في هذه اللوحة اللي نقدر نقول عنها لوحة افكار لتصميم غرفة جلوس بديت استوحي التصميم من اللوحة و استخرجت منها باقي قطع المفروشات حتى تكوّنت غرفة جلوس بستايل المودرن و العصري بالوان الباستيلات.مثل ما نشوف كل القطع سادة و ناعمة الا اللوحة و المخدة الموجودة على القنفة و فيها زخرفة تتماشى الوانها مع الوان اللوحة و تكملة الغرفة. لهذا دايما ننتبه في تصاميمنا على اتقان الالوان صح و لو كانت النقشات مختلفة و كثيرة.',
        "image": `${ImageOne}`,
        "elements": [
            {
                'title': 'Flamant',
                'link': 'https://www.instagram.com/aljeraiwy/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FFlamant.png?alt=media&token=90e084e7-abfd-467d-bdc5-ec309085b3c5',
            }, {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FPottery%20Barn.png?alt=media&token=8be03d8f-b9e9-445a-b488-9cdc5e56cd4b',
            }, {
                'title': 'Vectorme',
                'link': 'https://www.instagram.com/vectorme/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FVectorm.png?alt=media&token=c4f2c4ba-a7a6-4efd-bdb3-ba2441a97ccc',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FWest%20Elm%202.png?alt=media&token=e6dabf25-f103-4814-857d-731ff1865f73',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FWest%20Elm.png?alt=media&token=bd6e179a-81d4-4e1f-ac61-63719d91c0f4',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FWest%20Elm%203.png?alt=media&token=9f84bb8f-a6cd-4dbc-ac8a-2d687b744062',
            }, {
                'title': 'Zara Home',
                'link': 'https://www.instagram.com/zarahome/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FZara.png?alt=media&token=909503e4-99b2-4e71-a9c5-18bde26d73ab',
            }, {
                'title': 'Jotun Paint',
                'link': 'https://www.instagram.com/jotun_paints/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FJoton%20Paint.png?alt=media&token=55cc7dd5-08fa-47e2-9696-98798f5a67a2',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fone%2FWest%20Elm%204.png?alt=media&token=e6ebef25-ab9c-48a2-a560-feec7af6cc0d',
            }
        ]
    },

    {
        "title": 'الجلد بستايل مودرن',
        "text": 'في الستايل الحديث لا نستغرب من الجلد فيه و لا نفكر انه هذه المادة فقط تتماشى مع ستايل الكلاسيكي، في الموضة الحديثة الجلد له مكانه و في هذه اللوحة قررت اجمع مفروشات من مختلف المحلات في الكويت و اسوي غرفة جلوس مميزة. الوانها جدا ناعمة و هادية بالازرق اللي موجود في السجادة و المخدات، و بلون العسلي الموجود في جلد القنفة الكبيرة في الغرفة و غير هذه الالوان كلها تصير الوان حيادية بالاكسسوارات و القطع الجمالية. فنبتدي باللوحات و المرايا لونهم ابيض، الطاولات الجانبية لون البيج و الاسود الاضاءة الجانبية رمادية، البفات او اللي نسميهم العثماني اسود و بيج. اللي عطى الغرفة ستايل المودرن بعد هو الكونكريت المتواجد في الزرع التجميلي للغرفة، زاد الغرفة اناقة و خلاها عصرية و تتماشى مع الموضة.',
        "image": `${ImageTwo}`,
        "elements": [
            {
                'title': 'Al Maadan',
                'link': 'https://www.instagram.com/almaadankw/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FAl%20Maadan.png?alt=media&token=2af6849a-de2c-4fd5-ab24-ded98591a34a',
            }, {
                'title': 'Concretist',
                'link': 'https://www.instagram.com/concretist/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FConcretist%201.png?alt=media&token=4447f2b0-244e-419a-adda-3ab300a10a7d',
            }, {
                'title': 'Concretist',
                'link': 'https://www.instagram.com/concretist/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FConcretist.png?alt=media&token=d3c4b87b-5fe9-48db-bb64-f8b0a7f090eb',
            }, {
                'title': 'Flamant',
                'link': 'https://www.instagram.com/aljeraiwy/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FFlamant%201.png?alt=media&token=59d7c6cc-30e7-4789-a8f2-c9303c65addb',
            }, {
                'title': 'Flamant',
                'link': 'https://www.instagram.com/aljeraiwy/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FFlamant.png?alt=media&token=d1cc66d8-0644-44fb-a2e0-db5117646eb0',
            }, {
                'title': 'Ikea',
                'link': 'https://www.instagram.com/ikeakuwait/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FIkea.png?alt=media&token=8d9d4ff4-381c-42fb-b935-17bc990727d9',
            }, {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FPottery%20Barn.png?alt=media&token=a88468ca-588a-4508-ba61-8d76d7d1ed45',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FWest%20Elm%201.png?alt=media&token=f1ab6fd8-3c9a-4e9a-840c-596fdf9882da',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ftwo%2FWest%20Elm.png?alt=media&token=f029c8b0-7562-4303-b90b-716fab088101',
            }
        ]
    },

    {
        "title": 'رمادي عصري و حديث',
        "text": 'في مراحل التصميم، مهم جداً دراسة المكان و مساحته و الألوان المناسبة للنشاط في المساحة اللي نريد نصممها. في غرفة الطعام هذه قررت اسوي هذه اللوحة اللي فيها كل ما في التصميم لغرفة الطعام. من سبع محلات للاثاث قدرت اخذ كل قطعة من مكان لانشاء غرفة الطعام بستايل المودرن و الالوان الرمادية و البيضاء مع تداخل مواد الخشب و الزجاج و العنصر الجميل النبات في كل مكان في البيت. من الموضة في غرف الطعام التشكيلة في اشكال المقاعد، مثل ما نشوف في لوحة المفروشات المختارة اني حبيت اختار نوعين للجلوس، كراسي عادية و مقعد لثلاث اشخاص. الطاولة الخشبية لغرفة الطعام تميزت بنعومتها و انها واضحة و غير ثقيلة. بالنسبة للسجاد فالزخرفة المختارة فيها راح تعطي جمال و اناقة لكل الغرفة لان كل شي غيرها من المفروشات ناعم و سادة. استخدام الكتان للستاير راح يزيد الغرفة بساطة مع تالق. و اكيد للاكسسوارات طعم خاص في اي غرفة في البيت. كسرنا الالوان الحيادية الرمادي و البيج بالازرق الخفيف في الاكسسوارات على طاولة الاكل و اللوحة المرسومة.',
        "image": `${ImageThree}`,
        "elements": [
            {
                'title': 'Abyat',
                'link': 'https://www.instagram.com/abyat/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FAbyat.png?alt=media&token=c89db826-f752-4439-95d6-e372f63180e4',
            }, {
                'title': 'Al Maadan',
                'link': 'https://www.instagram.com/almaadankw/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FAl%20Maadan.png?alt=media&token=54e87c37-e6a9-4c04-a5ae-d327cd99c4d9',
            }, {
                'title': 'Flamant',
                'link': 'https://www.instagram.com/aljeraiwy/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FFlamant.png?alt=media&token=08e2bd91-9318-4d77-8928-981eb70e4929',
            }, {
                'title': 'Ikea',
                'link': 'https://www.instagram.com/ikeakuwait/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FIkea.png?alt=media&token=5f0eb7f2-00a6-44fe-889b-287340a52bb8',
            }, {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FPottery%20Barn.png?alt=media&token=078b1d07-3721-47fb-9a28-364cd03fb084',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FWest%20Elm%201.png?alt=media&token=be41796d-7a3a-4c97-8283-033675d1e53f',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FWest%20Elm.png?alt=media&token=7a5040e3-34c3-4664-8ade-750ab3c67819',
            }, {
                'title': 'Zara Home',
                'link': 'https://www.instagram.com/zarahome/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FZara%20Home%201.png?alt=media&token=621bbaa9-6ec0-4376-beb0-3f5e4cb35a45',
            }, {
                'title': 'Zara Home',
                'link': 'https://www.instagram.com/zarahome/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fthree%2FZara%20Home.png?alt=media&token=4510bfcf-408d-409c-980d-81a0c4570a6f',
            }
        ]
    },
];

class Shopping extends Component {
    render() {
        const containerStyle = {
            padding: "30px 0px",
            backgroundColor: "rgba(0, 0, 0, 0)"
        };

        return (
            <div dir="rtl" className="container-fluid" style={containerStyle}>
                <ShoppingList content={content[0]}/>
                <Divider />
                <ShoppingList content={content[1]}/>
                <Divider />
                <ShoppingList content={content[2]}/>
            </div>
        );
    }
};

export default Shopping;
