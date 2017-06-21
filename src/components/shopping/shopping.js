import React, {Component} from 'react';
import ShoppingList from './shopping-list.js';
import Divider from '../utilities/divider.js';
import ImageOne from '../../assets/images/shopping/One.png';
import ImageTwo from '../../assets/images/shopping/Two.png';
import ImageThree from '../../assets/images/shopping/Three.png';

const content = [
    {
        'title': 'غرفة الطعام بخلطة من الستايلات؟!',
        'text':  'نعم، نقدر نخلط كذا ستايل حتى نخلق اللي نبيه في الديكور. في هذه الغرفة الطعام حبيت امزج بين الستايل الحديث و الصناعي بالاضافة الى ستايل الفينتج من خلال الالوان. الطاولة ناعمة جدا و ارجلها رفيعة و كلها لون خشبي واحد، المقاعد في هذه الغرفة انقسمت الى نوعين: النوع الاول هو كراسي منجدة بلون البيج و ارجلها بني غامق، و النوع الثاني في غرفة الاكل هو المقعد الخشبي اللي لونه من لون الطاولة و فوقه قطعة اسفنج باللون الازرق الناعم.',
        'text2': 'على الطاولة اكسسوارات مختلفة، منها مودرن و حديث و منها حديدية و معادن فيها من الستايل الصناعي. الاضاءة من دون اختلاف نلاقي فيها كل مواصفات الستايل الصناعي من خلال الحبال و الحديد و الزجاج المكشوف. خطوط ناعمة في الغرفة في السجادة و ورق الجدران و حتى الستاير. و الالوان المحايدة هي الطاغية بالاضافة الى لمسات اللون الاخضر الفاتح الباستل و الازرق الباستل اعطوا نعومة و رقي للغرفة.',
        'image': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FMOOD%20BOARD.png?alt=media&token=dff2615f-171a-4f60-9ce0-3910a171151b',
        'elements': [
            {
                'title': 'ALSARRAF DECOR',
                'link': 'https://www.instagram.com/alsarrafdecor/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FALSARRAF%20DECOR.jpg?alt=media&token=74bd6861-7d18-4f82-9696-a231791bdab8',
            }, {
                'title': 'SUM',
                'link': 'https://www.instagram.com/sum_kw/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FSUM%202.jpg?alt=media&token=31abfea7-ba17-4f98-890e-07d3f3a8a78b',
            }, {
                'title': 'SUM',
                'link': 'https://www.instagram.com/sum_kw/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FSUM%20.jpg?alt=media&token=9007cbcf-2b40-4a53-b7ca-efb302a2dfae',
            }, {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FPOTTERY%20BARN%20.jpg?alt=media&token=5eab9f98-4ed9-4adc-81ec-fd656af246ab',
            }, {
                'title': 'H&M Home',
                'link': 'https://www.instagram.com/hm_home/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FH%26M.PNG?alt=media&token=1d301b60-5e73-4e38-9a9f-68570c5a263b',
            },  {
                'title': 'Concretist',
                'link': 'https://www.instagram.com/concretist/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FCONCRETIST.png?alt=media&token=b40606fe-bba8-4d63-beaf-7f455628314c',
            }, {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FPOTTERY%20BARN%202%20.jpg?alt=media&token=1374cf56-29dd-45b2-b9ff-ab437fa90a7a',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FWEST%20ELM.jpg?alt=media&token=ed081fd5-72d1-40e0-9691-286f19463dc9',
            }, {
                'title': 'ALSARRAF DECOR',
                'link': 'https://www.instagram.com/alsarrafdecor/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FALSARRAF%20DECOR%202.jpg?alt=media&token=5bf568fb-4eb0-4172-b4ab-115569ee4ebf',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FWEST%20ELM%202.JPG?alt=media&token=f7f45ad5-fdd4-49aa-be7d-6a49c2a1f259',
            }, {
                'title': 'IKEA',
                'link': 'https://www.instagram.com/ikeakuwait/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FIKEA.jpg?alt=media&token=611c1dd7-1660-4e96-9061-2429a110fd90',
            }, {
                'title': 'RESTORAL HARDWARE',
                'link': '',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FRESTORAL%20HARDWARE.jpg?alt=media&token=f06f02c4-c214-495c-b26b-3b293c4b3bfe',
            }, {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Fsix%2FWEST%20ELM%203.jpg?alt=media&token=ead4e523-63e2-462f-99f8-2d20d92ff33f',
            },
        ]
    },
    {
        'title': 'غرفة طفل مودرن بالوان حديثة',
        'text': 'ذكرت في حلقاتي السابقة في برنامج تصاميم عن غرف الاطفال و الالوان اللي افضلها لغرف الاطفال و ذكرت انه مو لازم دايما نتقيد بالالوان التقليدية اللي اهي الازرق للاولاد و الوردي للبنات، في لوحة الافكار الموجودة جمعت من محلات مختلفة في الكويت و في دول الخليج اثاث لتكوين غرفة طفل بالالوان المحايدة مع اللون الاصفر اللي دخل حتى يعطي تطعيمة جميلة في الغرفة. السجادة في لوحة الافكار هذه هي القطعة الاساسية اللي من خلالها استخرجت الوان الغرفة. بعض القطع الوانها سادة و بعضها منقشة. الاستخدام الصحيح لخلط الاقمشة هي اننا نقدر نخلط اي نقشة مع اي نقشة ثانية و لكن كل اللي علينا نسويه اننا نلتزم بالالوان الموجودة بين نقشة و الثانية. مثل لوحة الافكار اللي امامكم، السلة فيها نقشة و السجاد فيها نقشة و حتى فرش السرير فيه نقشة مختلفة تماما عن النقشات الباقية، اللي خلى التصميم ينجح انهم فيهم من نفس الالوان.',
        'video': 'https://www.youtube.com/embed/tFBtATHlGig',
        'image': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2Fmain.jpg?alt=media&token=aedeb802-92b2-4480-b225-6a0ee12d8d0d',
        'elements': [
            {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FWest%20Elm_Carpet.png?alt=media&token=afe813e4-f02b-4752-90ee-461042275091',
            }, {
                'title': 'H&M Home',
                'link': 'https://www.instagram.com/hm_home/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FHM_Home.png?alt=media&token=8a4a8a0c-5e00-4703-b739-d847be65d7e8',
            }, {
                'title': 'H&M Home',
                'link': 'https://www.instagram.com/hm_home/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FHM_Home_Curtain.png?alt=media&token=f3960218-7c73-490b-b0dd-e42556929f55',
            }, {
                'title': 'IKEA',
                'link': 'https://www.instagram.com/ikeakuwait/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FIKEA_plant.png?alt=media&token=f88ce66a-bbe8-4676-90d8-804243097a63',
            }, {
                'title': 'IKEA',
                'link': 'https://www.instagram.com/ikeakuwait/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FIKEA_Sofa.png?alt=media&token=ccfbd408-1d9f-4279-8ac2-e35aedea5814',
            },  {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FPottery%20Barn.png?alt=media&token=1c0861c6-d985-4fd3-be22-81dfadebb0b0',
            }, {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FPottery%20Barn_Bag.png?alt=media&token=6eb83e6d-ba08-4bb4-abc4-eca3eca134f6',
            }, {
                'title': 'Pottery Barn',
                'link': 'https://www.instagram.com/potterybarnmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FPottery%20Barn_Cot.png?alt=media&token=9ca21a5b-04d4-4114-8e1f-fde4b537c61d',
            }, {
                'title': 'SUM',
                'link': 'https://www.instagram.com/sum_kw/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FSUM.png?alt=media&token=3ac1d575-ecee-4cfd-8cb7-50fa13574c6d',
            }, {
                'title': 'ALSARRAF DECOR',
                'link': 'https://www.instagram.com/alsarrafdecor/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffive%2FAl%20SARRAF_Floor.jpg?alt=media&token=b7d6c605-97d3-4c05-ae38-32afb273f8bf',
            },
        ]
    },
    {
        'title': 'حمام مودرن بالوان جريئة',
        'text': 'ما يمنع ان يكون التصميم الداخلي موجود حتى في الحمامات، كثير منا يجهل اهمية التصميم لهذه الزاوية في البيت و يعتبر تصميمها دايما تقليدي اما كل شي ابيض او لون موحد في المكان. في لوحة الافكار اللي عندنا اليوم حبيت اجمع لكم قطع مفروشات من محلات مختلفة لخلق حمام بستايل مودرن و عصري. الالوان المستخدمة هي الالوان المحايدة بالاضافة الى اللون الازرق و لون الورد الموجود في فازة الورد من بيسز باي فرح الذهبية. بتطعيم الحمام بلون الازرق اللي يتماشى مع الموضة في الستاير و الكرسي الجانبي اعطى نوع من الانتباه و الجرأة في التصميم. و أكيد اضافة الورد الاوركيد في الحمام يعطي الاناقة و النعومة في منطقة الحمام. كونوا جريئين في اختيار اثاثكم و لا تعتمدون فقط على الاطقم التقليدية لتكوين حمام جميل. الحمام الانيق اللي يمشي مع الموضة ما يتقيد بنوع اثاث معين لكل الحمام، بل نقدر نجمع اثاثه من اكثر من محل و يكون عندنا حمام ما حد عنده مثله.',
        'image': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffour%2FMain.png?alt=media&token=6be847c8-6f97-482f-9a2d-1508d752d87f',
        'elements': [
            {
                'title': 'West Elm',
                'link': 'https://www.instagram.com/westelmmena/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffour%2FWest%20Elm.png?alt=media&token=8ec2e082-5685-4bc1-a9a9-5ac40634179f',
            }, {
                'title': 'Pieces by Farah',
                'link': 'https://www.instagram.com/piecesbyfarah/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffour%2FPieces%20by%20Farah.png?alt=media&token=48ebb7e7-de04-43ea-b854-8c951cda3912',
            }, {
                'title': 'Hassan Abul',
                'link': 'https://www.instagram.com/hassanabul/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffour%2FHassan%20Abul.png?alt=media&token=823c6d72-e6c6-4912-b593-afc0a11d5070',
            }, {
                'title': 'Hassan Abul',
                'link': 'https://www.instagram.com/hassanabul/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffour%2FHassan%20Abul%20One.png?alt=media&token=6466a92b-0f38-4c05-836a-d80f8e9ee7b2',
            }, {
                'title': 'Zara Home',
                'link': 'https://www.instagram.com/zarahome/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffour%2FZara%20Home.png?alt=media&token=95aebdae-0b34-41ee-94a3-c78309e68bc6',
            }, {
                'title': 'H&M Home',
                'link': 'https://www.instagram.com/hm_home/',
                'imageURL': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/shopping%2Ffour%2FH%26M%20Home.png?alt=media&token=ef8f7ac5-ac3b-419c-82d4-69f2bcaaf1ed',
            },
        ]
    },
    {
        'title': 'باستيلات بستايل حديث',
        'text': 'تصميم اي غرفة بالبيت ما يعتمد كيف نبدا..يعتمد على اي قطعة اخترتها من البداية و عجبتنني و شلون اقدر اصمم كل الغرفة على اساسها. في هذه اللوحة اللي نقدر نقول عنها لوحة افكار لتصميم غرفة جلوس بديت استوحي التصميم من اللوحة و استخرجت منها باقي قطع المفروشات حتى تكوّنت غرفة جلوس بستايل المودرن و العصري بالوان الباستيلات.مثل ما نشوف كل القطع سادة و ناعمة الا اللوحة و المخدة الموجودة على القنفة و فيها زخرفة تتماشى الوانها مع الوان اللوحة و تكملة الغرفة. لهذا دايما ننتبه في تصاميمنا على اتقان الالوان صح و لو كانت النقشات مختلفة و كثيرة.',
        'image': `${ImageOne}`,
        'elements': [
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
        'title': 'الجلد بستايل مودرن',
        'text': 'في الستايل الحديث لا نستغرب من الجلد فيه و لا نفكر انه هذه المادة فقط تتماشى مع ستايل الكلاسيكي، في الموضة الحديثة الجلد له مكانه و في هذه اللوحة قررت اجمع مفروشات من مختلف المحلات في الكويت و اسوي غرفة جلوس مميزة. الوانها جدا ناعمة و هادية بالازرق اللي موجود في السجادة و المخدات، و بلون العسلي الموجود في جلد القنفة الكبيرة في الغرفة و غير هذه الالوان كلها تصير الوان حيادية بالاكسسوارات و القطع الجمالية. فنبتدي باللوحات و المرايا لونهم ابيض، الطاولات الجانبية لون البيج و الاسود الاضاءة الجانبية رمادية، البفات او اللي نسميهم العثماني اسود و بيج. اللي عطى الغرفة ستايل المودرن بعد هو الكونكريت المتواجد في الزرع التجميلي للغرفة، زاد الغرفة اناقة و خلاها عصرية و تتماشى مع الموضة.',
        'image': `${ImageTwo}`,
        'elements': [
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
        'title': 'رمادي عصري و حديث',
        'text': 'في مراحل التصميم، مهم جداً دراسة المكان و مساحته و الألوان المناسبة للنشاط في المساحة اللي نريد نصممها. في غرفة الطعام هذه قررت اسوي هذه اللوحة اللي فيها كل ما في التصميم لغرفة الطعام. من سبع محلات للاثاث قدرت اخذ كل قطعة من مكان لانشاء غرفة الطعام بستايل المودرن و الالوان الرمادية و البيضاء مع تداخل مواد الخشب و الزجاج و العنصر الجميل النبات في كل مكان في البيت. من الموضة في غرف الطعام التشكيلة في اشكال المقاعد، مثل ما نشوف في لوحة المفروشات المختارة اني حبيت اختار نوعين للجلوس، كراسي عادية و مقعد لثلاث اشخاص. الطاولة الخشبية لغرفة الطعام تميزت بنعومتها و انها واضحة و غير ثقيلة. بالنسبة للسجاد فالزخرفة المختارة فيها راح تعطي جمال و اناقة لكل الغرفة لان كل شي غيرها من المفروشات ناعم و سادة. استخدام الكتان للستاير راح يزيد الغرفة بساطة مع تالق. و اكيد للاكسسوارات طعم خاص في اي غرفة في البيت. كسرنا الالوان الحيادية الرمادي و البيج بالازرق الخفيف في الاكسسوارات على طاولة الاكل و اللوحة المرسومة.',
        'image': `${ImageThree}`,
        'elements': [
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
            padding: '30px 0px',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        };

        return (
            <div dir='rtl' className='container-fluid' style={containerStyle}>
                <ShoppingList content={content[0]}/>
                <Divider />
                <ShoppingList content={content[1]}/>
                <Divider />
                <ShoppingList content={content[2]}/>
                <Divider />
                <ShoppingList content={content[3]}/>
                <Divider />
                <ShoppingList content={content[4]}/>
            </div>
        );
    }
};

export default Shopping;
