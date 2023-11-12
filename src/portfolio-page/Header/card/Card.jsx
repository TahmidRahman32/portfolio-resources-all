import React from 'react';
import icon1 from '../../../../public/images/icons/js.png'
import icon4 from '../../../../public/images/icons/mongo.png'
import icon3 from '../../../../public/images/icons/nodejs.png'
import icon2 from '../../../../public/images/icons/react.png'
import Summary from '../sumary/Summary';

const Card = () => {
   return (
      <div className="w-full mx-auto max-w-7xl mt-12">
         <div className="grid grid-cols-4 gap-8 mb-16">
            <div className="px-16 border border-slate-100">
               <img src={icon1} alt="" />
               <h4 className="text-xl font-medium my-4">Vanilla JavaScript</h4>
               <p className="text-slate-400">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="px-16 border border-slate-100">
               <img src={icon2} alt="" />
               <h4 className="text-xl font-medium my-4">React</h4>
               <p className="text-slate-400">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="px-16 border border-slate-100">
               <img src={icon3} alt="" />
               <h4 className="text-xl font-medium my-4">Node.js</h4>
               <p className="text-slate-400">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="px-16 border border-slate-100">
               <img src={icon4} alt="" />
               <h4 className="text-xl font-medium my-4">MongoDB</h4>
               <p className="text-slate-400">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
            </div>
         </div>
         <Summary></Summary>
      </div>
   );
};

export default Card;