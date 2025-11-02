import React from 'react';
import { useTranslation } from 'react-i18next';

const Tenders = () => {
  const { t } = useTranslation();
  
  const tenders = [
    {
      id: 'TDR/2023/001',
      title: t('tenders.sampleTitle', 'Construction of Community Hall'),
      department: t('tenders.pwd', 'Public Works Department'),
      published: '2023-11-01',
      closing: '2023-12-15',
      status: 'open'
    },
    {
      id: 'TDR/2023/002',
      title: t('tenders.sampleTitle2', 'Water Supply System Maintenance'),
      department: t('tenders.waterDept', 'Water Supply Department'),
      published: '2023-10-25',
      closing: '2023-11-30',
      status: 'open'
    },
    {
      id: 'TDR/2023/003',
      title: t('tenders.sampleTitle3', 'Road Construction Work'),
      department: t('tenders.pwd', 'Public Works Department'),
      published: '2023-10-15',
      closing: '2023-10-30',
      status: 'closed'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('tenders.title', 'Tenders')}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {t('tenders.subtitle', 'Current and upcoming tenders from the Gram Panchayat')}
          </p>
        </div>
        
        <div className="mt-12 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('tenders.tenderId', 'Tender ID')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('tenders.title', 'Title')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('tenders.department', 'Department')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('tenders.published', 'Published On')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('tenders.closing', 'Closing Date')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('tenders.status', 'Status')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tenders.map((tender) => (
                <tr key={tender.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {tender.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <a href="#" className="text-primary hover:text-primary/80">
                      {tender.title}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tender.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(tender.published).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(tender.closing).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      tender.status === 'open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {tender.status === 'open' 
                        ? t('tenders.statusOpen', 'Open') 
                        : t('tenders.statusClosed', 'Closed')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tenders;
