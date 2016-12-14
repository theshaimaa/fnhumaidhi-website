import React, {Component} from 'react';
import PortfolioElement from './portfolio-element.js';
import Divider from '../utilities/divider.js';

const content = [
    {
        "title": 'نبذة خلف فكرة التصميم',
        "name": 'رد مانغو',
        "year": '٢٠١١',
        "location": '٣٦٠ مول',
        "type": 'مشروع تجاري',
        "p1": 'رد مانغو هو محل لبيع الزبادي المثلج. صمم المكان لاستيعاب منطقة الكاونتر، ومنطقة الخدمات ومنطقة للجلوس.',
        "p2": 'يعكس مفهوم التصميم بالأجواء الشبابية و اللينة. وقد تم استخدام الألوان الفاتحة. الأثاث بأحجامه المتناسبة المقترحة اعطت الاسترخاء الجذاب لجيل الشباب. كان التصميم مزيج من المنحنيات والخطوط المستقيمة التي كانت سمة بارزة بالتصميم في "رد مانغو" بالإضافة إلى استخدام ألوان الخشب الأبيض والأحمر. استخدام ذكي للإضاءة لا تستكمل إلا في التصميم. منطقة الجلوس ليست مريحة فحسب، بل تترجم أيضا إلى العصرية والأنيقة.',
        "images": {
            'one': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fred-mango%2FImage2.jpg?alt=media&token=2b5de005-af1b-4ba9-92ca-dc84859a95d5',
            'two': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fred-mango%2FImage5.jpg?alt=media&token=7ca3a3cd-c36f-4f61-a2f5-ae2a9723d7a1',
            'three': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fred-mango%2FImage1.jpg?alt=media&token=e785b53a-2882-4279-a0cb-ef130e4a2935',
            'four': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fred-mango%2FImage4.jpg?alt=media&token=05c1f872-ce8d-4bbe-8d3a-c6d9e4cd7f02',
        },
    }, {
        "title": 'نبذة خلف فكرة التصميم',
        "name": 'برفكت ١٠ نيل بار',
        "year": '٢٠١٠',
        "location": "برج التجارية",
        "type": 'مشروع تجاري',
        "p1": 'هذا الصالون المخصص للعناية بالاظافر يقع في مبنى التجارية في الكويت. المكان مقسم الى 4 محطات باديكير، 2 محطات مانيكير، بار و مكان الاستقبال، الفكرة خلف التصميم هي المحافظة على "الحركة الديناميكية و النشاط".',
        "p2": 'الألواح الخشبية غير النظامية مع الأرضية الصلبة و الباردة اعطى الصالون سحر في الديكور. هذا المكان المصمم هو خير مثال على الابتكارات المعاصرة خصوصاً في الإضاءات والمرايا المتداخلة، استغلت الإضاءة دفء بينما نلاحظ تلاعب المرايا في رحابة الصالون. لاحتواء الإحساس الدافئ والبارد قمنا باستخدام مواد مثل تطبيق أرضية خرسانيةو الايبوكسي وجلد الغزال المنجد. الاضاءة خلقت الدفء الذي أعطى مساحة من الخفة والدقه.',
        "images": {
            'one': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fperfect-nail-salon%2FImage1.jpg?alt=media&token=29bf1aaa-baae-464e-88f8-6f85df6fedee',
            'two': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fperfect-nail-salon%2FImage2.jpg?alt=media&token=a5eb41d7-4561-4d3c-8628-9de63b922c31',
            'three': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fperfect-nail-salon%2FImage3.jpg?alt=media&token=994e646d-e098-434b-862d-cf066baca4d2',
            'four': 'https://firebasestorage.googleapis.com/v0/b/era-farah-alhumaidhi.appspot.com/o/portfolio%2Fperfect-nail-salon%2FImage4.jpg?alt=media&token=a75ecaac-d9aa-44af-a14b-041564442a0e',
        },
    }
];

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            content,
        }
    }

    render() {
        return (
            <div>
                <PortfolioElement content={this.state.content[0]}/>
                <Divider />
                <PortfolioElement content={this.state.content[1]}/>
            </div>
        );
    }
};

export default Portfolio;
