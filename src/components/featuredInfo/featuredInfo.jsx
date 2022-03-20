import "./featuredInfo.css"
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { ArrowUpward } from "@mui/icons-material";
export default function featuredInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"> Revanue</span>
                <div className="featuredMoneyContainer"> 
                    <span className="featuredMoney"> $12,321</span>
                    <span className="featuredMoneyRate"> -5.11 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
            <span className="featuredSub"> Compare to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle"> Sales</span>
                <div className="featuredMoneyContainer"> 
                    <span className="featuredMoney"> $55,321</span>
                    <span className="featuredMoneyRate"> -2.11 <ArrowDownward  className="featuredIcon negative"/></span>
                </div>
            <span className="featuredSub"> Compare to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle"> Cost</span>
                <div className="featuredMoneyContainer"> 
                    <span className="featuredMoney"> $15,321</span>
                    <span className="featuredMoneyRate"> +3.11 <ArrowUpward className="featuredIcon" /></span>
                </div>
            <span className="featuredSub"> Compare to last Month</span>
        </div>
     </div>
  )
}
