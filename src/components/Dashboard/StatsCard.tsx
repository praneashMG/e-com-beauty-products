import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle: string;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, title, value, subtitle, color, trend }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    green: 'bg-green-50 border-green-200 text-green-600',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
    red: 'bg-red-50 border-red-200 text-red-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
    purple: 'text-purple-600'
  };

  const valueColorClasses = {
    blue: 'text-blue-800',
    green: 'text-green-800',
    yellow: 'text-yellow-800',
    red: 'text-red-800',
    purple: 'text-purple-800'
  };

  return (
    <div className={`${colorClasses[color]} rounded-xl p-4 lg:p-6 border transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 lg:p-3 bg-white rounded-lg shadow-sm`}>
            <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${iconColorClasses[color]}`} />
          </div>
          <div>
            <div className={`text-2xl lg:text-3xl font-bold ${valueColorClasses[color]}`}>{value}</div>
            <div className={`${iconColorClasses[color]} text-sm lg:text-base font-medium`}>{title}</div>
            <div className={`text-xs lg:text-sm opacity-75`}>{subtitle}</div>
          </div>
        </div>
        
        {trend && (
          <div className={`text-xs lg:text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;