import React from "react";
import Sidebar from "../utils/Sidebar";
import { arrowRight } from "../../../assets/Icons/Icons";
import { Link } from "react-router-dom";
import { ratings } from "../../../data/ratings";
import { useSelector } from "react-redux";

const Filter = () => {
  const products = useSelector((store) => store.shopping.dataCopy);
  return (
    <section>
      <div className="md:flex container">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="md:hidden mb-6 sticky top-12">
          <button className="bg-white rounded-full p-2 shadow">
            <img src={arrowRight} alt="previous" className=" w-6 h-6" />
          </button>
        </div>

        <div className="grid md:pl-20 lg:pl-32 container grid-cols-1 xxs:grid-cols-2 items-end lg:grid-cols-3 gap-8 w-full">
          {products.map((product) => (
            <div key={product.id}>
              {/* <div className="pt-3 flex pl-4">
                {product.variations ? (
                  <div>{product.variations[0].type}</div>
                ) : null}
              </div> */}
              <Link
                to={`shopping/product/${product.id}`}
                className="flex justify-center rounded-md shadow-md cursor-pointer"
              >
                <div className="flex p-4 sm:w-48 flex-col gap-3">
                  <div className="flex justify-center max-h-44 max-w-44">
                    <img
                      src={`/${product.image}`}
                      alt={product.name}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2 mt-4">
                    <p className="text-xs max-w-[250px]">{product.name}</p>
                    <img
                      src={`/${
                        ratings.find(
                          (rating) => product.rating.stars === rating.rating
                        ).image
                      }`}
                      alt="rating"
                      className="h-4 object-contain"
                    />
                  </div>

                  <p className="text-xs text-lightGray mt-1">
                    ({product.rating.count}) reviews
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-base text-lightGray oldstyle-nums">
                      ${Math.floor(product.priceCents / 100)}
                    </p>
                    <p className="text-sm text-lightGrayWhite line-through">
                      ${Math.floor((product.priceCents / 100) * 2)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        voluptatibus sint voluptates reiciendis, recusandae neque dignissimos
        obcaecati eum porro aperiam architecto facilis repellat quibusdam, minus
        maiores ipsa exercitationem odio. Molestias. Eius autem ut sit officiis
        veniam adipisci unde in a odio? Nobis dolorem cumque recusandae sit sint
        repellat nulla soluta odit nisi quis, illum maxime dolorum inventore
        doloribus unde quaerat? Magnam, doloremque dolore aspernatur incidunt
        deleniti ducimus error vero molestias ea debitis officia voluptate
        consequuntur non rem, quasi reprehenderit veniam expedita, dignissimos
        cupiditate iure? Quaerat praesentium quam minima ab maxime. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Dolores aliquam sequi
        voluptatem vel. Perspiciatis temporibus quas, explicabo vitae non sint!
        Obcaecati repellendus a minima soluta sapiente voluptate temporibus
        dignissimos possimus! Eius maiores culpa iusto consectetur laudantium
        consequuntur quam veniam officiis distinctio debitis placeat sit odio
        velit hic totam repellendus sequi quas porro explicabo nostrum officia
        nemo vero, dicta voluptate. Corrupti. Commodi omnis harum, dicta est, ut
        magni molestias eius quod quia dignissimos eum officia itaque earum ex
        voluptatibus vitae. Exercitationem, ipsum vitae ullam et praesentium
        alias nostrum repellat nam recusandae? Amet omnis hic reiciendis quasi
        distinctio, et mollitia vitae velit in dolor cupiditate animi esse saepe
        magnam inventore error voluptas sunt fugiat ea nobis quia temporibus.
        Eaque sit ex et? Quibusdam incidunt quas pariatur est deserunt impedit
        modi corrupti ab inventore dolorum alias cupiditate temporibus quis
        libero et voluptates ullam, asperiores hic cum eligendi illo? Quidem ea
        mollitia ipsa placeat. Eligendi saepe et recusandae ducimus ipsum soluta
        perferendis eius? Nisi dignissimos illo vero provident labore culpa
        tempore quam voluptatem non fugiat repudiandae quas, nulla, ullam natus
        vel cum eaque! Nesciunt? Illum sunt architecto aspernatur reiciendis
        quibusdam quod obcaecati, impedit eius! Ipsam distinctio earum officiis
        doloremque illum sequi, quod tenetur voluptatem suscipit aliquid autem
        provident a voluptatum delectus tempora dolor unde! Obcaecati ut fugiat
        cum, praesentium dolorem iure consequatur dolor earum, officiis minus
        dolorum. Officiis nemo obcaecati corrupti, debitis nisi odit velit ullam
        ab eaque sapiente nobis aut libero ratione in? Commodi, sequi. Dolorum
        mollitia accusantium laborum quia natus voluptatem corporis delectus
        sint architecto dolor eaque reprehenderit molestiae enim quos, ut
        voluptatum officia doloribus exercitationem quis. Nulla explicabo quis
        nobis laudantium. Officia impedit, similique veritatis, autem totam,
        quas cupiditate iste optio doloribus dolor hic! Consequatur, similique
        asperiores magnam a officia voluptatum numquam eum, accusamus dolor
        assumenda recusandae vero iusto vitae perferendis? Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Velit eum explicabo, ea possimus
        mollitia nisi, totam, sint dolores voluptatem autem illo molestias quas
        neque deleniti. Recusandae quis incidunt consequuntur perspiciatis!
        Suscipit ut quidem consequuntur possimus recusandae nam maxime, corrupti
        minima a repellat laudantium eum reprehenderit! Animi, sed culpa eaque
        alias iste pariatur perferendis tempora aliquid, aperiam omnis quidem,
        deserunt accusantium. Ex voluptatibus sit corporis aspernatur explicabo
        atque dolorem, exercitationem quo hic voluptatum rem cumque consequatur
        suscipit impedit molestiae commodi vitae culpa minus officia? Reiciendis
        harum, sit dolore dolorem ipsam ratione. Esse nemo animi enim, fugit sed
        minus sapiente odit veniam repellat tenetur ducimus explicabo incidunt
        assumenda qui rerum ullam, cupiditate atque eligendi iusto quod eveniet,
        nisi impedit magnam. Debitis, fuga! Ipsa tenetur repellendus assumenda
        voluptatem, eveniet sit vitae architecto, quasi veritatis dolorum
        dolorem et ad consequuntur illum, aut fuga explicabo vero. Dolore
        excepturi tempora dolorum praesentium, minus laboriosam rem vero! Nobis
        veniam exercitationem repellat in rem totam aliquam odio blanditiis
        inventore enim. Autem, beatae iure voluptate, sunt unde perferendis ex
        ut nostrum distinctio, vitae nesciunt omnis tempore accusamus repellat
        minus? Libero odit culpa numquam perspiciatis ipsum, perferendis fugit
        quam optio repellat soluta aliquid temporibus possimus velit tenetur
        porro sunt minima. Numquam neque tenetur quis odit voluptatibus nihil
        soluta itaque corporis. Nisi illum minus tempora eos maxime aspernatur?
        Libero rem natus, facilis dolorum quam unde odit in quo, cumque quas
        vero corporis enim aliquam nam nulla temporibus velit recusandae vitae
        consequuntur! Tenetur enim magnam esse totam. Corrupti ad incidunt id
        aliquam nam architecto delectus excepturi omnis unde minus maxime eum
        fugit itaque, magni, molestiae ipsam consequuntur quos repudiandae,
        laborum similique nostrum! Et obcaecati quaerat aliquam eius dolorum
        veritatis magni nulla, nihil accusamus quis! Consequatur aperiam vero a
        distinctio voluptates aliquid maiores magnam. Nemo laboriosam quis error
        cumque adipisci dolore odit? Aliquam. Animi alias illo dignissimos
        deserunt, atque architecto velit quae nostrum omnis mollitia voluptatum
        neque enim facere reprehenderit in delectus praesentium necessitatibus
        repellendus ea ratione fuga amet tempore numquam aliquid. Nemo? Tenetur
        modi ipsam eligendi architecto aspernatur excepturi veritatis, corrupti,
        possimus harum animi nostrum eaque eius tempore atque quia dolorem ullam
        commodi debitis reiciendis. Consequuntur alias rem temporibus, dolores
        quisquam maxime. Animi fugiat quia odit quae qui! Nulla accusamus
        blanditiis eveniet provident dolorum, totam, vel ab exercitationem velit
        amet aliquid, repellat quos maxime similique excepturi explicabo harum!
        Ea nemo eos debitis. Sunt quibusdam vitae modi nam, neque nesciunt minus
        sapiente? Vel recusandae nulla voluptate minima debitis praesentium quis
        cupiditate odit, quo repellat! Ipsam quo nisi, laudantium voluptates
        mollitia possimus illo necessitatibus? Ea amet dolorem odio architecto
        incidunt, iste, natus vel tempora ab corrupti fuga corporis. Reiciendis
        placeat, eum repudiandae corrupti, officia fugiat officiis porro
        cupiditate quibusdam, ab recusandae cumque omnis temporibus? Ex esse
        repellendus amet itaque delectus molestias quam accusamus porro quia?
        Vel mollitia fugiat officiis facere, consequatur totam doloremque! Autem
        ipsa nisi obcaecati laudantium fuga aliquam dolores nihil esse sit?
        Obcaecati porro excepturi, sapiente expedita molestias non blanditiis
        beatae reprehenderit ullam perferendis illum id repellat maiores
        necessitatibus voluptatem harum laudantium! Dignissimos, aperiam odit
        quo quaerat iure rerum quidem cum aut! Veritatis praesentium architecto,
        totam, inventore sit quam nihil molestias voluptatum ipsum ad deleniti
        voluptatibus beatae. Magnam cupiditate quasi harum blanditiis?
        Recusandae repudiandae temporibus inventore voluptatum libero fugit non
        asperiores illo. Maiores quibusdam totam laboriosam. Veritatis ex odio
        ipsam consequuntur temporibus repudiandae, numquam atque animi. Pariatur
        eos velit tempore assumenda cum. Quasi quis, doloribus vero veritatis
        distinctio placeat sed cum eaque? Necessitatibus, earum enim minima ipsa
        autem praesentium excepturi omnis asperiores nemo facere nesciunt
        officiis incidunt veniam distinctio alias voluptatibus rerum! Debitis
        facere assumenda eaque, ab officia animi repellat tempore nostrum.
        Illum, ratione pariatur quae, aperiam expedita officia quo error
        corporis deserunt a omnis, ipsa odio nihil eaque placeat ex quaerat
        animi veniam sequi excepturi dolores. Laudantium recusandae rem
        repellendus cumque. Alias cum dicta praesentium ducimus consequatur,
        illo ad aliquam, non consequuntur voluptatem est recusandae. Corporis
        sequi unde sapiente! Voluptatum fugit hic recusandae alias. Dignissimos
        eius culpa porro amet repudiandae doloribus! Recusandae magni alias
        porro consequatur minima iusto quidem unde distinctio sed, hic
        consequuntur facere officia illum. Omnis labore hic vero accusantium
        magni repellat consequuntur aspernatur praesentium voluptates? Iste,
        excepturi accusamus? Provident sit, odit repellat, cupiditate porro
        recusandae eligendi commodi voluptates, facilis tenetur alias! Modi
        quisquam, nostrum doloribus illum molestiae delectus, quibusdam dicta
        laboriosam beatae libero laudantium dolorem qui nisi consequuntur!
        Distinctio iste amet non dolorum, cum culpa quas possimus exercitationem
        perferendis hic, quod eligendi laborum ut, vero optio saepe aliquid et?
        Non cum maxime quibusdam odio velit est, id maiores. Odit laborum unde
        eius esse dolorem expedita accusantium voluptates officia autem
        reprehenderit! Quae doloribus aut optio expedita laboriosam animi
        facilis assumenda corporis eum veniam quod hic ratione, repudiandae
        obcaecati commodi. Veritatis necessitatibus voluptate sequi in similique
        deserunt, incidunt debitis provident illum ducimus voluptatibus amet
        minima sed magni, culpa cumque ipsam possimus minus asperiores quae
        autem libero. Voluptates possimus ducimus nulla! Quas, accusamus modi
        iste necessitatibus numquam neque ducimus quasi nobis dolor suscipit,
        officiis blanditiis placeat possimus corporis cupiditate. Odio
        temporibus sint quidem laboriosam sunt provident debitis veniam in rem
        totam! Molestias esse quis, placeat sit est repellendus minima
        dignissimos reprehenderit ea vero qui, nihil dicta impedit temporibus
        saepe numquam perferendis itaque velit autem! Molestias sed
        reprehenderit atque obcaecati omnis iure! Culpa, sit possimus beatae
        minus quod maiores at esse quos ea tenetur sequi suscipit amet expedita
        debitis minima! Ducimus numquam totam itaque, a in magnam voluptatum
        quasi aperiam dolorum deleniti.
      </div>
    </section>
  );
};

export default Filter;
