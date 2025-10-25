import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Eye, 
  Filter, 
  RefreshCw, 
  CreditCard, 
  User as UserIcon,  // ✅ Renamed to avoid conflict
  Phone, 
  MapPin, 
  Calendar 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { User } from '../../types'; // ✅ Your custom type
import UserProfileModal from './UserProfileModal';
import PaymentDetailsModal from './PaymentDetailsModal';

const AdminDashboard: React.FC = () => {
  const { approveUser, rejectUser, getPendingUsers } = useAuth();
  const { t } = useLanguage();
  const [pendingUsers, setPendingUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'payments'>('pending');

  const loadPendingUsers = () => {
    setRefreshing(true);
    const users = getPendingUsers();
    setPendingUsers(users);
    setRefreshing(false);
  };

  useEffect(() => {
    const filtered = pendingUsers.filter(user => {
      if (activeTab === 'pending') {
        if (filter === 'completed') return user.profileCompleted;
        if (filter === 'incomplete') return !user.profileCompleted;
      }
      return true;
    });
    setFilteredUsers(filtered);
  }, [pendingUsers, filter, activeTab]);

  useEffect(() => {
    loadPendingUsers();
  }, []);

  const handleApprove = (userId: string) => {
    approveUser(userId);
    loadPendingUsers();
    alert('User approved successfully! They can now access the platform.');
  };

  const handleReject = (userId: string) => {
    if (confirm('Are you sure you want to reject this user?')) {
      rejectUser(userId);
      loadPendingUsers();
      alert('User rejected and removed from system.');
    }
  };

  const handleViewProfile = (user: User) => {
    setSelectedUser(user);
    setShowProfileModal(true);
  };

  const getApprovedUsers = () => {
    const approvedData = localStorage.getItem('approved_users');
    return approvedData ? JSON.parse(approvedData) : [];
  };

  const getPaymentData = () => {
    // Mock payment data - in real app this would come from payment service
    return [
      {
        id: '1',
        userId: 'user1',
        userName: 'Priya Gounder',
        amount: 199,
        date: new Date('2024-01-15'),
        status: 'completed',
        paymentMethod: 'UPI',
        transactionId: 'TXN123456789'
      },
      {
        id: '2',
        userId: 'user2',
        userName: 'Kavitha Gounder',
        amount: 199,
        date: new Date('2024-01-14'),
        status: 'completed',
        paymentMethod: 'Card',
        transactionId: 'TXN123456788'
      }
    ];
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-red-900">{t('admin.dashboard')}</h1>
            <p className="text-red-600 mt-2">{t('admin.manage')}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Tab Navigation */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeTab === 'pending' 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Pending ({pendingUsers.length})
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeTab === 'approved' 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Approved ({getApprovedUsers().length})
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeTab === 'payments' 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Payments
              </button>
            </div>
            
            <button
              onClick={loadPendingUsers}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            
            {activeTab === 'pending' && (
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              >
                <option value="all">{t('admin.all.users')}</option>
                <option value="completed">{t('admin.completed.profile')}</option>
                <option value="incomplete">{t('admin.incomplete.profile')}</option>
              </select>
            )}
            
            {activeTab === 'pending' && (
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-medium">
                {filteredUsers.length} {t('admin.pending.approvals')}
              </div>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-800">{pendingUsers.length}</div>
                <div className="text-blue-600 text-sm">{t('admin.pending.approvals')}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-800">{getApprovedUsers().length}</div>
                <div className="text-green-600 text-sm">{t('admin.approved.users')}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-yellow-800">
                  ₹{getPaymentData().reduce((sum, payment) => sum + payment.amount, 0)}
                </div>
                <div className="text-yellow-600 text-sm">Total Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div key={user.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <UserIcon className="w-6 h-6 text-red-600" /> {/* ✅ Fixed */}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center space-x-1">
                              <Phone className="w-3 h-3" />
                              <span>{user.mobile}</span>
                            </span>
                            <span className="capitalize">Profile for: {user.whoseProfile}</span>
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex items-center space-x-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.profileCompleted 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.profileCompleted ? 'Profile Completed' : 'Profile Incomplete'}
                        </div>
                        
                        <div className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          Waiting for Approval
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => handleViewProfile(user)}
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('admin.view')}</span>
                      </button>
                      
                      <button
                        onClick={() => handleApprove(user.id)}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>{t('admin.approve')}</span>
                      </button>
                      
                      <button
                        onClick={() => handleReject(user.id)}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>{t('admin.reject')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No new registrations to review</h3>
                <p className="text-gray-500">All pending registrations have been processed</p>
                <button
                  onClick={loadPendingUsers}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Check for New Registrations
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'approved' && (
          <div className="space-y-4">
            {getApprovedUsers().map((user: User) => (
              <div key={user.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span>{user.mobile}</span>
                          </span>
                          <span className="capitalize">Profile for: {user.whoseProfile}</span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Approved & Active
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.profileCompleted 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.profileCompleted ? 'Profile Complete' : 'Profile Incomplete'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => handleViewProfile(user)}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {getApprovedUsers().length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No approved users yet</h3>
                <p className="text-gray-500">Approved users will appear here</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Payment Transactions</h3>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
            
            {getPaymentData().map((payment) => (
              <div key={payment.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{payment.userName}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>₹{payment.amount}</span>
                          <span>{payment.paymentMethod}</span>
                          <span>{payment.date.toLocaleDateString()}</span>
                          <span className="text-xs text-gray-500">{payment.transactionId}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {payment.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modals */}
        {showProfileModal && selectedUser && (
          <UserProfileModal
            user={selectedUser}
            onClose={() => setShowProfileModal(false)}
          />
        )}

        {showPaymentModal && (
          <PaymentDetailsModal
            payments={getPaymentData()}
            onClose={() => setShowPaymentModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;