import React from 'react';
import PropTypes from 'prop-types';

export const LinkSymbol = (props) => {
  const { size, leftColor, cname, rightColor } = props;

  return <svg height={size} viewBox="0 0 22 9" version="1.1" className={cname}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-358.000000, -1343.000000)" fillRule="nonzero">
        <g transform="translate(356.000000, 1334.000000)">
          <g transform="translate(13.029625, 13.971589) rotate(45.000000)
          translate(-13.029625, -13.971589) translate(4.029625, 4.971589)">
            <path d="M4.09704666,17.7720779 C2.44113907,17.7710208 0.948676179,16.7777023
            0.314745093,15.2547422 C-0.319185993,13.7317822 0.0300683634,11.9786494
            1.19984938,10.811833 L4.92230891,7.10300426 C5.68961585,6.33645602 6.73248724,5.90647933
            7.81950619,5.90848755 C8.60267582,5.90846321 9.36944421,6.13191046 10.0289849,6.55236119
            C10.2780059,6.70997934 10.508661,6.89466048 10.7167035,7.10300426 C10.9539492,7.33977041
            11.0775893,7.6665972 11.056173,8.00034853 C11.0359822,8.27960985 10.9154778,8.54230019
            10.7167035,8.7403662 C10.2547011,9.1732608 9.53403428,9.1732608 9.07203188,8.7403662 C8.38649637,8.0587263
            7.27592771,8.0587263 6.59039219,8.7403662 L2.85330035,12.4579353 C2.16720635,13.14098 2.16720635,14.2484142
            2.85330035,14.9314589 C3.53939435,15.6145036 4.6517725,15.6145036 5.3378665,14.9314589
            L7.54734523,12.7288866 C7.63083941,12.6452107 7.75677158,12.6199061 7.86632958,12.6647906
            C8.46102406,12.9055877 9.09726949,13.0283123 9.73926519,13.0260591 L9.85632367,13.0260591
            C9.97521559,13.0253708 10.0827089,13.0963619 10.1283005,13.205679 C10.1738922,13.3149961
            10.1485192,13.4409088 10.0641025,13.52426 L6.99131747,16.5833881 C6.22431511,17.347904
            5.18240062,17.7758229 4.09704666,17.7720779 Z" fill={leftColor}></path>
            <path d="M9.75682396,12.1520225 L9.73926519,12.1520225 L9.53441286,12.1520225
            C9.38843612,12.1462148 9.24287851,12.132599 9.09837004,12.1112341 C8.9783851,12.0908399
            8.86132662,12.0675323 8.74426815,12.0383977 L8.5716069,11.9917824 C8.5101512,11.9743017
            8.44576904,11.9539075 8.38431334,11.9305999 C8.32285764,11.9072922 8.25847547,11.886898
            8.19701977,11.8606769 C8.13556407,11.8344558 8.07410837,11.8111482 8.01265267,11.7820136
            C7.57710459,11.5810893 7.18077889,11.3048943 6.84206792,10.9662461 C6.60482219,10.72948
            6.48118207,10.4026532 6.50259834,10.0689019 C6.52140827,9.78759145 6.64201533,9.52260712
            6.84206792,9.32305728 C7.30407031,8.89016268 8.02473711,8.89016268 8.4867395,9.32305728
            C9.17227502,10.0046972 10.2828437,10.0046972 10.9683792,9.32305728 L11.9282587,8.37327082
            L11.9516704,8.34704972 L14.6966916,5.61714201 C15.3827856,4.93409731 15.3827856,3.82666309
            14.6966916,3.14361841 C14.0105976,2.46057374 12.8982195,2.46057372 12.2121255,3.14361838
            L10.0084997,5.33453684 C9.92500551,5.41821282 9.79907334,5.44351736 9.68951534,5.39863286
            C9.09599857,5.15699455 8.4607334,5.03327746 7.81950619,5.03445093 L7.7112271,5.03445093
            C7.59167185,5.03672564 7.48275291,4.96635834 7.43613968,4.85673015 C7.38898721,4.74743043
            7.41331425,4.62056943 7.49759538,4.53625006 L10.5674539,1.4829488 C12.1675318,-0.110017618
            14.7617706,-0.110017618 16.3618485,1.4829488 C17.9619263,3.07591522 17.9619263,5.65862407
            16.3618485,7.25159049 L12.6364625,10.9604192 C12.1124384,11.482256 11.4560379,11.852798
            10.7371887,12.0325708 L10.7049976,12.0325708 L10.5352628,12.0675323 L10.441616,12.085013
            L10.2396902,12.1141476 L10.1401905,12.1141476 C10.0641025,12.1141476 9.99679384,12.1287148
            9.93241168,12.1316283 L9.75682396,12.1520225 Z" fill={rightColor}></path>
          </g>
        </g>
      </g>
    </g>
  </svg>;
};
LinkSymbol.propTypes = {

  /**
  Sets height of the component, width is set automatically by the svg viewbox property. Default height is '9px'.
  */
  size: PropTypes.number,

  /**
  Sets color of the component. Default value is '#050606'.
  */
  rightColor: PropTypes.string,

  /**
  Sets the background color of the component. Default value is '#0F0F10'.
  */
  leftColor: PropTypes.string,

  /**
  Adds class to the component. Default value is ''.
  */
  cname: PropTypes.string
};
LinkSymbol.defaultProps = {
  size: 9,
  leftColor: '#0F0F10',
  rightColor: '#050606',
  cname: ''
};
