// components/global/CodeViewer.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeViewerProps {
  language: string;
  className?: string;
}
const codeString = `
{         "roomTypeId": "GMYS2",
          "offerId": "GI5ESN",
          "supplier": "nuitee",
          "supplierId": 2,
          "rates": [
            {
              "rateId": "I42F4",
              "occupancyNumber": 2,
              "name": "Room, 1 King Bed - Room Only",
              "maxOccupancy": 3,
              "adultCount": 2,
              "childCount": 1,
              "boardType": "RO",
              "boardName": "Room Only",
              "remarks": "<ul><li>Free valet parking</li><li>Free self parking</li><li>Free WiFi</li></ul><br/ .  ><br/>You will be charged 23.950000000000003 USD  upon arrival by the hotel (Charges may be applied in local currency).",
              "priceType": "commission",
              "commission": [
                {
                  "amount": 57.5,
                  "currency": "USD"
                }
              ],
              "retailRate": {
                "total": [
                  {
                    "amount": 416.92,
                    "currency": "USD"
                  }
                ],
                "msp": [
                  {
                    "amount": 416.92,
                    "currency": "USD"
                  }
                ],
                "taxesAndFees": [
                  {
                    "included": false,
                    "description": "Mandatory Tax",
                    "amount": 15.97,
                    "currency": "USD"
                  },
                  {
                    "included": false,
                    "description": "Mandatory Tax",
                    "amount": 7.98,
                    "currency": "USD"
                  },
                  {
                    "included": true,
                    "description": "Tax",
                    "amount": 68,
                    "currency": "USD"
                  }
                ]
              },
              "cancellationPolicies": {
                "cancelPolicyInfos": [
                  {
                    "cancelTime": "2024-08-30 22:59:00",
                    "amount": 416.92,
                    "currency": "USD",
                    "type": "amount",
                    "timezone": "GMT"
                  }
                ],
                "hotelRemarks": [],
                "refundableTag": "RFN"
              }
            },
            {
              "rateId": "I42FURCNLJJFOTKZGNDUSTKUIRDUSWKEI5GUUU2HIEZUORKOKJNEOWSTKRGU4WSTI5ATGRCFJZJFMR2ZGJEFSTKSIRDUSWKEIVHEEUKIIVMUIQZXIJJUOQK2IREU2QS2I5AVUWCZLJGE6TBVJNLEON2DKZFU4NSGJNKTERKQKFMVKQ2NINCEMNC2IVBU2S2EI5CVSWCZJVJFGSCBLJMFSVSKKNFVUTKIIU3UEUSHGRMVIT2PJJKEOWKZIRFU2WSTI5MTGR2RGQZUUUCJKJKEGTKCK5DUKWKEINEVUVCHIVLVIQ2NIJLUORKZIRBTOQ2TJFNEQSCZJVJFCR2JGJCECT2CKRDUCWSEIVHEUWSQKEZFQWKOLJJEQQJUIREUSMSTJI2FEVSFKJJU6RKNLJCECTKSKVDFKWKEKFGEUVCHIFIUIRKNKIZEOVJUKF6DIMJWFY4TE7BSGAZDILJQHAWTGMBAGIZDUNJZHIYDA7CSJ4",
              "occupancyNumber": 1,
              "name": "Room, 1 King Bed - Room Only",
              "maxOccupancy": 1,
              "adultCount": 1,
              "childCount": 0,
              "boardType": "RO",
              "boardName": "Room Only",
              "remarks": "<ul><li>Free valet parking</li><li>Free self parking</li><li>Free WiFi</li></ul><br/><br/>You will be charged 23.950000000000003 USD  upon arrival by the hotel (Charges may be applied in local currency).",
              "priceType": "commission",
              "commission": [
                {
                  "amount": 57.5,
                  "currency": "USD"
                }
              ],
              "retailRate": {
                "total": [
                  {
                    "amount": 416.92,
                    "currency": "USD"
                  }
                ],
                "msp": [
                  {
                    "amount": 416.92,
                    "currency": "USD"
                  }
                ],
                "taxesAndFees": [
                  {
                    "included": false,
                    "description": "Mandatory Tax",
                    "amount": 15.97,
                    "currency": "USD"
                  },
                  {
                    "included": false,
                    "description": "Mandatory Tax",
                    "amount": 7.98,
                    "currency": "USD"
                  },
                  {
                    "included": true,
                    "description": "Tax",
                    "amount": 68,
                    "currency": "USD"
                  }
                ]
              },
              "cancellationPolicies": {
                "cancelPolicyInfos": [
                  {
                    "cancelTime": "2024-08-30 22:59:00",
                    "amount": 416.92,
                    "currency": "USD",
                    "type": "amount",
                    "timezone": "GMT"
                  }
                ],
                "hotelRemarks": [],
                "refundableTag": "RFN"
              }
            }
          ]
        }
`;
const CodeViewer: React.FC<CodeViewerProps> = ({ language, className }) => {
  return (
    <div
      className={`border border-[#F6F6F7] rounded-xl w-full ${
        className ? className : ''
      }`}>
      <div className='flex items-center  p-[10px] border-b border-[#F6F6F7]'>
        <span className='text-[8px] uppercase font-normal text-black tracking-widest'>
          Response
        </span>
        <div className='border gap-2 border-[#F6F6F7] font-medium rounded-md text-[9px] flex items-center ml-auto px-3 py-[7px]'>
          <circle className='circle bg-green-400 rounded-full p-[6px]'></circle>
          200 - Response
        </div>
      </div>
      <SyntaxHighlighter showLineNumbers language={language} style={lightfair}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
