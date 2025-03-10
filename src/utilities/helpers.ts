import { SkusData, StoreData } from "./interfaces";
import calenderData from '../assets/calender.json';

// return column Definition for planning grid
export const getPlanningColDef = () => {
    const fieldObj:any={};
    
    calenderData.forEach((e:any)=>{
      const WeekObj = {
        headerName: e['Week Label'],
        children: [
          {
            headerName: 'Sales Units',
            field: `${e.Week}.salesUnits`,
            sort: "desc",
            valueFormatter: (params: any) => params.value ? params.value : 0, 
            cellClass: 'text-end',
            width: 150
          },
          {
            headerName: 'Sales Dollars',
            field: `${e.Week}.salesDollars`,
            valueFormatter: (params: any) => params.value ? params.value : 0,
            cellClass: 'text-end',
            width: 150
          },
          {
            headerName: 'GM Percent',
            field: `${e.Week}.gmPercent`,
            width: 120,
            valueFormatter: (params:any) => params.value ? (params.value + ' %') : 0 + ' %',
            cellClass: (params: any)=> {
              let item = 'text-end ';
              if(params.value >= 40){
                item += 'bg-[#44A248]';
              }
              else if(params.value >= 10 && params.value < 40){
                item += 'bg-[#FACC14]';
              }
              else if(params.value > 5 && params.value < 10){
                item += 'bg-[#FB923C]';
              }else{
                item += 'bg-[#FDA5A5]';
              }
              return item;
            }
          }
        ]
      }
      if(fieldObj[e.Month]){

        fieldObj[e.Month].children.push(WeekObj);

      }else{
        const obj = {
          headerName: e['Month Label'],
          children: [
            {
              ...WeekObj
            }
          ]
        }

        fieldObj[e.Month] = obj;
      }
    });
    
    return Object.values(fieldObj);
}

// return calculations for planning page
export const getCalculations = (planning: any, stores: StoreData[], skus: SkusData[]) => {
  const planningObject: any = {};

  planning.forEach((element: any, index:any) => {

    const storeLabel = stores.find(e => element.Store === e.ID)?.Label;
    const skuFound: any = skus.find(e => element.SKU === e.ID);

    // calculattions
    const key = `${element.Store}-${element.SKU}`;
    const salesDollars = element['Sales Units'] * skuFound.Price;
    const costDollars = element['Sales Units'] * skuFound.Cost;
    const gmDollars = salesDollars - costDollars;
    const gmPercent = (gmDollars/salesDollars) * 100;

    const weekObject = {
        salesUnits: element['Sales Units'],
        salesDollars: salesDollars.toFixed(2),
        gmDollars: gmDollars,
        gmPercent: gmPercent.toFixed(2)
    }

    if (planningObject[key]) {
      planningObject[key][element.Week] = weekObject;
    } else {
      planningObject[key] = {
        store: element.Store,
        storeLabel: storeLabel,
        sku: element.SKU,
        skuLabel: skuFound.Label,
        price: skuFound.Price,
        cost: skuFound.Cost,
        [element.Week]: weekObject
      }
    }
  });

  return Object.values(planningObject);
}