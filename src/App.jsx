import React, { useEffect, useRef, useState } from 'react'
const App = () => {

    const [percentage,setPercentage] = useState(0)
const addScrollEvent = ()=>{


   

// console.log(
//     document.body.scrollTop,
//     document.documentElement.scrollHeight,
//     document.documentElement.clientHeight,
//     document.documentElement.scrollTop);

// get howMuch you have scrolled
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
// console.log(document.documentElement.clientHeight);
// console.log(document.body.getBoundingClientRect());
    // get the hieght
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    // console.log("height",height,

    // "howMuchScrolled",howMuchScrolled);
   
  let percent = (howMuchScrolled/height) * 100

  setPercentage(percent)
    }
    useEffect(()=>{
        window.addEventListener("scroll",addScrollEvent)
    },[])

  return (
    <div>
<header>
    <div className='first-section'>
   <h1 id='game'>Horizontal scroll project</h1>
    </div>
    <div className='scroll-section'>
<div className='scroll' style={{width:percentage+"%"}}>

</div>
    </div>
</header>
   
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sunt adipisci iste nesciunt, nostrum incidunt ab fuga necessitatibus odit numquam eius dolorem et vero! Asperiores consectetur repellat ipsam ipsum reprehenderit rerum fuga suscipit pariatur laboriosam necessitatibus, error ratione dicta tempora doloribus assumenda, at ut quaerat voluptas perspiciatis dignissimos doloremque dolorum, velit nostrum. Exercitationem, quaerat voluptates et quisquam id aperiam inventore molestias minima sint nam repellat necessitatibus, deserunt doloribus corporis sed! Nemo facilis cumque ipsam at perspiciatis beatae amet iste excepturi ad ullam dolor possimus, commodi, accusamus libero sequi tenetur consequuntur est maxime ipsa quis eligendi eaque. Hic tempora natus dignissimos quia incidunt tenetur nobis eveniet. Eum excepturi saepe quisquam nemo omnis maxime qui labore vero rem, aliquam amet tempore vel fuga aperiam, dolorem eaque facilis ipsum porro ipsa quod id ea? Dolor provident earum dolorum laborum, repudiandae impedit sint maiores in, culpa assumenda commodi? Quae, maiores. Commodi, tempora ex est tenetur porro rem harum odit quo dolores iure error perferendis facilis animi laudantium eveniet qui, illo ipsa repudiandae. Eaque tenetur numquam quaerat suscipit quibusdam ipsam temporibus laboriosam beatae tempora doloremque iure dolorum commodi, natus sunt dolore consectetur, animi est officia minus accusamus quo, quod facilis voluptas sint? Saepe, deleniti eius quae porro optio incidunt laudantium modi aliquam maiores neque sit laborum rerum asperiores quos pariatur repellendus perspiciatis itaque at? Consequuntur iure explicabo nisi, sunt deserunt eum deleniti sit ipsa. Et, dolore? Alias placeat temporibus commodi dolorum odit? Pariatur illo ipsam sed fugit magni voluptatum, repudiandae id tempora distinctio iusto eligendi alias excepturi ab nobis, perspiciatis maxime, et commodi! Dolorem qui minus illo, labore unde velit, repellat delectus natus culpa laborum veniam cumque quaerat minima repudiandae perferendis eum ipsum ex! Aliquam odit eaque, iure esse quia assumenda totam hic blanditiis delectus quo vero. Obcaecati qui eligendi a, eius vitae, iure corrupti eum aliquam quos hic, harum ut doloribus molestiae dolore. Sint ipsum eius similique minima consequuntur, distinctio recusandae atque laboriosam. Deserunt saepe, ea et, ipsam ad veniam dolores quod modi autem tenetur, at molestiae. Recusandae facere sapiente libero, rerum labore culpa quia animi consequatur eos laborum cum ratione adipisci vitae earum harum deleniti in accusamus dignissimos magni ea id aspernatur. Alias illum, facilis quia aliquam optio veritatis ducimus laborum aspernatur exercitationem ipsam unde dolor. Quia consequatur dolore enim sed fugit rem minus, earum nihil exercitationem atque! Et facilis quam delectus quod facere corporis. Culpa reiciendis perspiciatis dicta officia harum velit soluta animi quo ab repudiandae aspernatur dolores architecto ratione, a sed tenetur id corrupti quos expedita aliquam provident commodi! Deserunt temporibus deleniti laudantium. Labore itaque perferendis odio consectetur deleniti veritatis sequi modi, earum repudiandae mollitia quo amet natus architecto repellendus, commodi excepturi aliquid perspiciatis consequuntur sapiente! Voluptatibus deleniti, error, asperiores nostrum iure fugit laboriosam hic minus ducimus quas autem dolorem commodi sapiente ullam quos in laborum, itaque vitae excepturi. Quia officia maiores aliquid saepe earum, odit cum placeat. Delectus amet asperiores corporis neque sequi cumque odio dignissimos quaerat vel laborum nostrum dolor est repudiandae illo enim facere corrupti fuga perferendis veritatis quia assumenda, commodi id repellat? Illo error id deleniti vero consequatur exercitationem in pariatur provident saepe at explicabo minima sequi dicta dolorum nobis sint commodi possimus quo laudantium libero, ex eveniet. Asperiores sequi molestias quod deleniti illo beatae accusamus similique qui fugiat cum atque sit officia expedita error impedit ad officiis nostrum maiores minus, veritatis autem odio? Beatae, aliquam exercitationem ea eius quaerat officiis debitis facilis excepturi rem reprehenderit, tenetur inventore nulla est optio magnam repudiandae. Temporibus quasi vitae quibusdam, ratione omnis natus vero officiis recusandae deleniti quo sapiente. Laborum eligendi ducimus nulla illum cum quod fugit necessitatibus beatae dolorum! Nobis nostrum quasi fuga ad doloremque fugiat maiores provident aliquam inventore. Quia, aut ad. Laboriosam animi laborum voluptate ut temporibus ad reiciendis! Optio, quasi est voluptatum dolorem libero voluptate fugit magni error, soluta, minima veritatis iste eaque perferendis autem ipsam provident exercitationem illo deserunt! Repudiandae laboriosam fugiat voluptates voluptate distinctio quod odit natus vitae, culpa, aspernatur nihil maxime dolorum labore laudantium, deleniti magnam quas neque consectetur sit minima consequuntur. Accusamus quidem quibusdam cumque officia voluptatibus sequi totam quis commodi esse perspiciatis nihil odio minima minus placeat voluptate distinctio, temporibus beatae tempore. Dolorum sed asperiores consectetur voluptas blanditiis iste debitis placeat quia molestias commodi consequuntur consequatur accusamus eaque est in quas harum, hic sunt? Possimus excepturi vitae quod. Velit placeat fugiat repudiandae repellendus, corporis nostrum ex? Aliquam libero at quae in fugit eveniet expedita? Blanditiis ullam officia libero optio tempora, deserunt qui nihil adipisci saepe! Distinctio accusantium molestias porro, voluptas et sit iste error inventore labore soluta eligendi perspiciatis numquam laudantium veniam cum adipisci non natus blanditiis unde reiciendis repudiandae alias accusamus aliquid. Consequatur atque nam ducimus deleniti minus, dolorem beatae repellat expedita. Nulla excepturi eius, vero totam assumenda dicta modi. Deserunt est officiis iure consequatur consequuntur quam, ipsum qui quod labore et non incidunt nobis nisi laboriosam ab expedita aliquam autem odit ea quasi! Fugiat error sed id nisi ipsa illo recusandae animi maxime eius dicta aspernatur beatae quasi, cumque inventore quam quis natus placeat reiciendis. Nam inventore neque modi est odio laudantium eligendi quisquam dolores illum, sapiente in soluta tempora dolor alias dolorem vero suscipit tempore quia ullam ipsam aut quis perspiciatis molestiae? Laborum iste mollitia labore dignissimos vero repellendus suscipit beatae. Non vitae, eligendi recusandae cupiditate magni nulla soluta eveniet harum tenetur autem doloremque cum eaque dolorum itaque quaerat tempora debitis, dolore dicta. Veritatis quaerat nemo architecto sed sit nam iste odio illo dignissimos rem, sapiente provident eligendi illum iusto accusantium repudiandae? Nobis, illum modi ullam odio tempore temporibus molestias reiciendis labore expedita! Soluta autem inventore reprehenderit eos aut, non laboriosam veniam quos nam excepturi dolore maiores sint, numquam earum necessitatibus dolorem minus saepe eveniet commodi fuga. Alias accusamus veniam ut eius impedit omnis obcaecati quod incidunt repellat veritatis nobis dolorum fugit sapiente itaque odio officiis, exercitationem reprehenderit facilis eaque qui aut! Dolore, nulla, quis odit minus mollitia repellendus omnis accusamus ipsa accusantium sequi ducimus tempore quibusdam ipsam sed nostrum a praesentium necessitatibus laudantium natus modi iusto delectus soluta dolores. Libero repellat doloremque dolores recusandae earum incidunt facilis tempora sit? Vel, ipsam. Architecto, quia pariatur. Cupiditate expedita, exercitationem explicabo fugit consequatur quibusdam magnam? Voluptas quas similique in nemo temporibus? Et quos deserunt ipsum, aliquam ratione unde in aut assumenda? Voluptas officiis doloribus aperiam voluptatum corporis sed quae recusandae esse ipsa. Sed animi praesentium suscipit ducimus incidunt consequatur tempore, hic corrupti vero adipisci sit? Nisi maxime commodi quibusdam quidem excepturi exercitationem velit dolores voluptatum, adipisci fugit quos illo ipsam rerum hic, architecto facilis. Rerum reprehenderit libero repellendus voluptates tempore aliquid quos aliquam vero accusamus dolore consequuntur velit exercitationem totam delectus vel amet impedit possimus, itaque consectetur. Distinctio veniam dolorem corporis obcaecati nemo mollitia quia hic facere ducimus sunt, dolor beatae facilis aperiam accusantium a, neque rerum. Eos illo omnis magnam ipsam repellendus. Amet dolores odit animi atque debitis eos? Explicabo impedit, reiciendis sint voluptatum id, illum ratione animi, consequatur perferendis numquam vel alias cupiditate saepe soluta atque iusto quisquam esse vero totam corrupti doloremque eaque expedita quidem. Vero non qui dolorem harum facere, et repellendus assumenda, explicabo, laboriosam saepe eveniet consequuntur distinctio! Sapiente quis tempore asperiores minima necessitatibus id maiores vero nostrum dolorum, enim voluptatem! Accusantium quasi, deleniti aliquam laborum ullam nisi, dolorem rerum sed veniam officia tenetur laudantium quisquam quod vero consequuntur sequi amet ipsum voluptatum eos voluptas id adipisci reprehenderit eius? Voluptatibus non magni nisi, totam nemo dignissimos possimus, nam ullam facere, dicta hic quod modi rem id ducimus iure. Minima ipsa temporibus esse omnis eligendi quo a iusto officia, similique aperiam recusandae labore facilis enim eveniet? Natus accusantium asperiores alias dolorem. Aut assumenda in dolorum pariatur non accusamus aliquid nihil dolore iure ut quisquam accusantium soluta saepe, quia sed ad. Maxime, vero nihil nisi fuga mollitia, error asperiores exercitationem aperiam aspernatur corrupti accusamus, eveniet necessitatibus temporibus non! Itaque ipsum porro consectetur aliquam! Ipsum laborum totam at ducimus. Quis explicabo quo nam facilis laborum. Illum quia laboriosam, ab reiciendis voluptatibus autem vitae earum est dolorem et? Dignissimos aliquid quaerat voluptate unde recusandae voluptatibus pariatur itaque veniam iure impedit. Culpa eos nam nulla esse expedita est fugit, cupiditate recusandae iste in saepe obcaecati neque iure vero, unde reiciendis voluptatum doloribus ex eveniet accusantium? Ex corporis modi, cumque distinctio nam assumenda, labore quibusdam ut adipisci reiciendis laborum illo laudantium? Temporibus, doloremque velit reiciendis omnis delectus eos itaque, debitis quae harum assumenda blanditiis atque doloribus tempore amet, corporis aut deserunt? Voluptatem error provident optio iste? Consectetur unde cupiditate voluptatibus commodi quod quis voluptate a labore nam consequatur explicabo, dolore nostrum asperiores possimus obcaecati maxime, voluptates suscipit. Modi, odio repudiandae? Maiores eveniet, dolorum dolore expedita id voluptas eligendi est quae, non obcaecati iure voluptates itaque vitae totam aperiam assumenda alias error voluptatum animi, cupiditate adipisci at! Fuga ab maxime voluptatum culpa neque, itaque, nemo nesciunt unde repellat eum debitis nam eius quod similique at a deleniti, excepturi ut hic! Doloremque, totam! Neque eligendi dolorum autem praesentium necessitatibus consequatur magnam placeat eos? Amet ducimus voluptatibus sit perferendis nemo nesciunt consequuntur assumenda repellendus delectus in velit magni veniam eligendi quasi maxime suscipit sint, blanditiis voluptas corrupti illo est officia? Ipsa sed recusandae vitae delectus molestiae, dolore maiores! Quam architecto non voluptates libero. Soluta velit quas alias. Quo amet fugiat eligendi blanditiis vel saepe rem magni minima velit consequatur expedita ex temporibus vitae eveniet animi nam optio iste, officiis sint, odio, quasi quae at quis neque. Alias saepe necessitatibus eveniet, quod temporibus nulla porro reprehenderit? Architecto, amet sit quasi deleniti maiores vero repellat facilis atque sed quos, aut natus eum debitis doloribus tenetur nisi, suscipit reiciendis culpa recusandae nesciunt provident ad facere! Aliquid, expedita! Corporis sit explicabo perspiciatis fuga maiores ut quos ratione, quisquam maxime repellat, suscipit minus officia autem iusto rerum voluptas, esse provident vero quod vitae ab libero doloribus? Eaque sequi, quod dolore cum hic laudantium sed possimus provident, harum accusamus porro quo mollitia tempora, voluptatem reprehenderit nesciunt reiciendis nisi ea quidem tenetur non nemo. Ullam accusamus unde quis! Veritatis maiores officiis nesciunt illo, placeat ratione fuga laborum totam ullam autem rerum eligendi quasi necessitatibus fugiat quo aliquam commodi debitis voluptatibus tempora amet ducimus praesentium. Magni doloribus sapiente vel iure. Nulla laudantium consequatur expedita? Error eveniet eligendi aspernatur aliquid, esse exercitationem a voluptate fugiat voluptas est nulla voluptatem dicta at aut pariatur quasi nesciunt veritatis ipsa sapiente. Numquam molestias voluptatibus, doloremque tempore ducimus pariatur repellendus cupiditate temporibus reprehenderit laudantium alias accusantium magnam quod rerum. Nulla corporis accusantium neque placeat quas atque totam fuga, est aspernatur nobis facilis aliquam obcaecati sint ducimus repellendus quis esse sequi? Quos numquam asperiores suscipit esse, pariatur ad iste accusamus vitae culpa, veniam, repudiandae odit ipsum facilis! Nihil nulla, fugiat facilis obcaecati impedit veritatis! Atque, itaque enim reiciendis autem sed corporis dolorem, ex quos delectus labore esse quas laborum veniam iste minus reprehenderit dolorum error distinctio cumque ipsam incidunt hic adipisci! Repellendus laboriosam repellat minima hic eligendi vero dignissimos? Id sapiente aliquid fugit excepturi quibusdam quae exercitationem, consequatur quam alias quidem reiciendis nisi dolorum expedita autem a, quaerat animi omnis dolor libero odio? Eum numquam possimus, voluptatem pariatur, magni voluptatum ipsa dolores aliquam aliquid expedita, facere quis! Aspernatur voluptate modi expedita nisi alias nesciunt neque, et accusantium, veniam repellat saepe ea unde distinctio ad cupiditate aperiam nulla dolorem beatae quasi officiis, suscipit molestias? Molestias beatae eius qui corporis nemo illo aliquid nulla eum error! Tenetur similique voluptatum quibusdam hic dolores, vel inventore neque. Corporis reiciendis commodi ratione ab distinctio perspiciatis iure rem ducimus qui, est architecto omnis sint. Doloremque quam voluptatem esse quaerat, natus officia ipsa alias. Quibusdam, ratione labore? A voluptatibus delectus perspiciatis voluptatem ut eius dolorum beatae repellendus, porro eum dolore amet. Accusamus error atque repellendus modi harum ullam quia dicta sunt repellat fugit rem possimus autem eos hic quibusdam, facilis ab perferendis illo sed quod laudantium eaque. Illum necessitatibus voluptate corrupti ratione nemo modi aliquam libero, fuga ex, consequatur dolor non placeat veritatis qui magnam. Perspiciatis minima nemo, asperiores unde consequuntur ad. Distinctio itaque consequatur, nulla, veniam eos architecto eius quam dolorum quaerat, ipsa omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque, dicta eaque, corporis inventore aspernatur exercitationem magnam voluptatem ipsam, consequatur quos rerum. Ex praesentium excepturi sed accusamus in odit voluptatem aspernatur veritatis, maiores officia, commodi atque suscipit. Aperiam ratione optio numquam ipsam, ea et consectetur blanditiis sequi aut neque obcaecati eveniet eligendi enim quo placeat quisquam consequuntur illo molestias voluptatibus! Rerum nemo odit ipsa ad incidunt dolorum sed, accusantium veritatis dolor quam, beatae sequi iure nulla? Ea, quod. Rerum quibusdam officiis repellat dicta blanditiis et necessitatibus quis inventore harum sapiente est quas officia, eum repudiandae laboriosam fugiat fuga quia itaque optio odio eos? Fugiat ea facilis nobis veniam tempora praesentium quas incidunt, itaque laboriosam amet! Qui natus voluptate soluta corrupti alias, enim ea repellat praesentium, dignissimos quam voluptatem, asperiores beatae similique? Officia eaque perferendis, animi in assumenda nesciunt, aut officiis nobis numquam quos debitis culpa. Ea impedit quod illo iure corrupti ipsum dignissimos soluta, non nam repellendus sapiente sed enim doloremque saepe officia aliquid sit voluptatem. Omnis officiis ducimus quisquam temporibus nostrum molestiae, pariatur maiores fugiat aperiam tempora a mollitia dolore velit magni. Ullam recusandae harum accusantium tempora laborum est eligendi! Similique laudantium necessitatibus repellendus soluta enim? Eveniet tempora laborum, modi eligendi nostrum voluptas saepe dolorum sit quasi reiciendis nisi, quidem doloribus provident recusandae labore architecto, vel voluptatibus dignissimos ducimus consectetur non nulla dicta quod? Quae similique laborum delectus beatae earum eligendi repellendus minima, dolore itaque nesciunt hic eos voluptas explicabo sunt rerum deserunt mollitia voluptatem numquam iusto sapiente molestiae. Ducimus voluptas, sint aut cumque aperiam perspiciatis quod ratione quis repellat quam vero, corporis nemo officia ab voluptate pariatur aliquid, quos ut praesentium. Culpa voluptatem fugiat eum atque veritatis minima? Earum nisi ut sunt quaerat, voluptatibus magnam libero eaque accusantium quisquam esse architecto corrupti incidunt ipsam voluptatem explicabo iure dolorem perferendis praesentium minima at magni unde doloribus excepturi. Quod adipisci voluptas doloribus vel officia quaerat provident, pariatur unde ipsa nostrum dolor esse, vitae placeat quae aspernatur cum voluptates expedita dolorum? Error eos vitae voluptatem at autem quas libero odio ea iste voluptas. Natus illum atque inventore? Eligendi tempore expedita dignissimos eaque laborum inventore consectetur ducimus delectus alias, illum magnam facere nobis aliquam? Assumenda vitae alias officia deleniti sint asperiores consectetur aut dolor iste delectus tempora voluptate cum corporis odit cumque, repellat eius? Ad odit voluptatibus sunt, sequi non excepturi distinctio tempore similique amet, consequatur accusantium quo modi placeat architecto nulla vero quibusdam maxime quasi voluptates aperiam illum accusamus ullam nisi aliquid. Deleniti deserunt iure velit non tenetur fugit tempore, numquam repellendus impedit ipsa quisquam vero rerum debitis beatae saepe nostrum neque et! Suscipit quis ab inventore repellendus. Natus recusandae, eligendi aut a iusto voluptatibus, reprehenderit itaque minus enim maxime qui veritatis. Voluptatibus, a doloremque. Est ratione harum corporis sit molestias similique laborum provident quas temporibus molestiae, optio minima officiis atque. Possimus labore voluptate molestiae voluptates sint. Sit nostrum possimus quibusdam animi necessitatibus provident eligendi vero atque hic! Autem maiores veniam, quisquam accusantium ab quasi tempora vitae ut. Eveniet, ipsa! Voluptatibus ut aliquid quis voluptate molestias quia cumque culpa et necessitatibus. Nihil repellat modi temporibus, fugiat in repudiandae officiis impedit consectetur necessitatibus. Accusantium dolores quos eveniet facere nihil. Porro beatae consequatur dolorem numquam, qui incidunt voluptatum ut illum possimus accusamus natus, labore obcaecati voluptates eaque fugit quae ratione voluptas assumenda dicta! Enim, aut impedit doloremque, quas, quaerat iure optio hic voluptates labore illo magnam adipisci tenetur. Dolorum obcaecati reiciendis nisi ab qui dignissimos nulla similique praesentium porro aspernatur quae, ea unde repellendus exercitationem! Quos, odio adipisci? Blanditiis tenetur unde quam doloribus reprehenderit. Ex dignissimos, reiciendis unde porro exercitationem corporis rerum libero voluptates omnis, tenetur numquam? Cumque aliquam maxime vel deserunt repudiandae quae nam voluptate, sint necessitatibus in unde asperiores, nulla exercitationem eius error praesentium nemo. Dicta magnam nulla adipisci voluptatem beatae animi inventore itaque, odit in quaerat, quo omnis ab commodi ipsum assumenda aut labore unde ex incidunt fugit? Itaque eius aut temporibus dolorum ab corrupti, cupiditate voluptatum maiores tenetur quia neque eveniet possimus non nostrum alias consequatur. Animi nam possimus ut commodi sit maxime, labore eveniet laborum fuga voluptatem dolorum ipsum. Consequuntur non sequi ab, mollitia impedit quod error voluptatum sint recusandae quae laboriosam, qui vel voluptate et saepe libero quisquam laborum eos possimus nemo eius ducimus, magnam dolores? Velit unde provident sunt nostrum fuga in sed architecto quibusdam deleniti? Distinctio ex eum corporis, tempore maiores harum neque asperiores aliquam dignissimos soluta incidunt cumque omnis veniam, esse totam animi excepturi officiis dolorum possimus numquam deserunt sint optio. Ex esse vitae minus mollitia atque fuga exercitationem amet consequatur repudiandae laudantium rem quam natus architecto, magnam dolorum placeat alias ullam qui quod dolore impedit. Voluptatem odio vel dolor blanditiis reprehenderit dolores aut saepe possimus veniam omnis! Hic natus laudantium est molestiae id libero aperiam cum nostrum explicabo vero quae exercitationem unde velit vel facere, dolor error totam. Iste, recusandae? Aut quasi dolores dolore amet sapiente! Ut rem aliquam ipsa voluptatem! Reiciendis ipsam tempora nisi est! Ad, neque, minima non id eos officia eaque enim ratione odio, vitae doloremque voluptates fugiat exercitationem magnam iste et? Maxime ad eligendi, illo voluptatum, vero illum nemo laudantium quisquam, aperiam obcaecati pariatur praesentium! Eius perspiciatis, laborum itaque unde dolores eaque! Sequi ea eos repudiandae sint, facere facilis mollitia libero incidunt accusamus! Nostrum, quo natus? Nihil sit neque nostrum illo dicta assumenda ea perspiciatis maiores incidunt unde aliquid, deserunt architecto libero reiciendis quia exercitationem similique culpa. Nisi, porro cupiditate ut expedita autem aperiam tempora dolorem sunt mollitia dolores at debitis vel delectus laborum est ratione tempore dolore quia ipsum velit ab? Omnis reiciendis alias suscipit consequatur, voluptatibus consectetur fugiat nulla molestiae dolor adipisci libero soluta et distinctio hic iure quisquam culpa ducimus eius nostrum! Pariatur quidem laboriosam dolores nihil veniam itaque sequi voluptatibus, nam dolorum incidunt iusto corrupti quisquam numquam optio vitae natus corporis esse quo quos fuga perferendis illo recusandae. Error voluptas qui cupiditate pariatur eveniet amet voluptatibus ea cumque! Modi, excepturi a nisi obcaecati, reiciendis reprehenderit iusto pariatur ad numquam natus quis, nulla maxime officia perferendis!</p>
    </div>
  )

  
}

export default App
 