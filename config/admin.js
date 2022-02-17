module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bbe1f4f5b9bac564aa0ceaddf02c44f2'),
  },
});
